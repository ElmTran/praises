use log::{ info, error, debug };
use uuid::Uuid;
use futures_util::{ StreamExt, SinkExt };
use tokio_tungstenite::{
    connect_async,
    tungstenite::protocol::Message,
    WebSocketStream,
    MaybeTlsStream,
};
use tokio::net::TcpStream;

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
        Self {
            text,
            speaker,
            language,
            rate,
            pitch,
            volume,
            ws,
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

    pub async fn receive(&mut self) -> Result<Vec<u8>, String> {
        let mut stream = Vec::new();
        while let Some(message) = self.ws.next().await {
            match message {
                Ok(Message::Binary(data)) => {
                    let msg = String::from_utf8_lossy(&data);
                    if msg.contains("Path:audio") {
                        let binary_delim = "Path:audio\r\n";
                        let start_idx = data
                            .windows(binary_delim.len())
                            .position(|w| w == binary_delim.as_bytes());
                        let audio_data = data[start_idx.unwrap() + binary_delim.len()..].to_vec();
                        stream.push(audio_data);
                    }
                }
                Ok(Message::Text(text)) => {
                    if text.contains("Path:turn.start") {
                        info!("Received turn.start");
                    } else if text.contains("Path:turn.end") {
                        info!("Received turn.end");
                        self.ws.send(Message::Close(None)).await.unwrap();
                        break;
                    } else if text.contains("Path:response") {
                        info!("Received response");
                    } else {
                        debug!("Received text: {}", text);
                    }
                }
                Ok(Message::Close(_)) => {
                    info!("Connection closed");
                    break;
                }
                Ok(_) => {
                    error!("Received unexpected message");
                }
                Err(e) => {
                    error!("Error receiving message: {}", e);
                }
            }
        }
        Ok(stream.concat())
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
