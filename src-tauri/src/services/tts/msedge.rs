use log::{ info, error };
use std::error::Error;
use uuid::Uuid;
use futures_util::{ StreamExt, SinkExt };
use tokio_tungstenite::{
    connect_async,
    tungstenite::protocol::Message,
    WebSocketStream,
    MaybeTlsStream,
};
use tokio::net::TcpStream;
use std::collections::HashMap;

static SYNTH_URL: &str =
    "wss://speech.platform.bing.com/consumer/speech/synthesize/readaloud/edge/v1?TrustedClientToken=6A5AA1D4EAFF4E9FB37E23D68491D6F4";

pub struct MsEdgeTTS {
    text: String,
    speaker: String,
    language: String,
    rate: String,
    pitch: String,
    volume: String,
    ws: WebSocketStream<MaybeTlsStream<TcpStream>>,
    streams: HashMap<String, Vec<Option<Vec<u8>>>>,
}

impl MsEdgeTTS {
    pub async fn new(
        text: String,
        speaker: String,
        language: String,
        rate: String,
        pitch: String,
        volume: String
    ) -> Self {
        let ws = connect_async(SYNTH_URL).await.unwrap().0;
        let mut streams = HashMap::new();
        Self {
            text,
            speaker,
            language,
            rate,
            pitch,
            volume,
            ws,
            streams,
        }
    }

    pub async fn init_client(&mut self) {
        info!("Connecting to {}", SYNTH_URL);
        self.ws
            .send(
                Message::Text(
                    format!(
                        "Content-Type:application/json; charset=utf-8\r\nPath:speech.config\r\n\r\n{{\"context\":{{\"synthesis\":{{\"audio\":{{\"metadataoptions\":{{\"sentenceBoundaryEnabled\":false,\"wordBoundaryEnabled\":true}},\"outputFormat\":\"{}\"}}}}}}}}",
                        "audio-24khz-96kbitrate-mono-mp3"
                    )
                )
            ).await
            .unwrap();
    }

    pub async fn send(&mut self) {
        let ssml = self.build_ssml();
        let request = format!(
            "X-RequestId:{}\r\nContent-Type:application/ssml+xml\r\nPath:ssml\r\n\r\n{}",
            Uuid::new_v4(),
            ssml
        );
        self.ws.send(Message::Text(request)).await.unwrap();
    }

    fn extract_request_id(&self, message: &str) -> Result<String, Box<dyn Error>> {
        if let Some(captures) = regex::Regex::new(r"X-RequestId:(.*?)\r\n")?.captures(message) {
            Ok(captures[1].to_string())
        } else {
            Err("Request ID not found".into())
        }
    }

    pub async fn receive(&mut self) -> Result<Vec<u8>, Box<dyn Error>> {
        while let Some(message) = self.ws.next().await {
            match message {
                Ok(Message::Binary(data)) => {
                    let buffer = data.clone();
                    let msg = String::from_utf8_lossy(&data);
                    let request_id = self.extract_request_id(&msg)?;
                    info!("Received {} bytes for request {}", buffer.len(), request_id);
                    if msg.contains("Path:turn.start") {
                    } else if msg.contains("Path:turn.end") {
                        if let Some(stream) = self.streams.get_mut(&request_id) {
                            stream.push(Some(buffer));
                        }
                    } else if msg.contains("Path:response") {
                        // context response, ignore
                    } else if msg.contains("Path:audio") {
                        info!("Received audio for request {}", request_id);
                    } else {
                        info!("UNKNOWN MESSAGE: {}", msg);
                    }
                }
                Ok(Message::Close(_)) => {
                    info!("Connection closed");
                    break;
                }
                Ok(_) => {}
                Err(e) => {
                    error!("Error: {}", e);
                    break;
                }
            }
        }
        Ok(vec![])
    }

    fn build_ssml(&self) -> String {
        format!(
            r#"
            <speak version="1.0"
                    xmlns="http://www.w3.org/2001/10/synthesis"
                    xmlns:mstts="http://www.w3.org/2001/mstts"
                    xmlns:emo="http://www.w3.org/2009/10/emotionml"
                    xml:lang="{}"
                >
                <voice name="{}">
                    <prosody rate="{}%" pitch="{}%" volume="{}%">
                        {}
                    </prosody>
                </voice>
            </speak>
        "#,
            self.language,
            self.speaker,
            self.rate,
            self.pitch,
            self.volume,
            self.text
        )
    }
}
