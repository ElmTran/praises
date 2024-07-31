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

    fn parse_headers(&self, s: impl AsRef<str>) -> Vec<(String, String)> {
        s.as_ref()
            .split("\r\n")
            .filter_map(|s| {
                if s.len() > 0 {
                    let mut iter = s.splitn(2, ":");
                    let k = iter.next().unwrap_or("").to_owned();
                    let v = iter.next().unwrap_or("").to_owned();
                    Some((k, v))
                } else {
                    None
                }
            })
            .collect()
    }

    pub async fn receive(&mut self) -> Result<Vec<u8>, Box<dyn Error>> {
        let mut buffer = Vec::new();
        while let Some(message) = self.ws.next().await {
            match message {
                Ok(Message::Text(s)) => {
                    info!("Text: {}", s);
                    if let Some(header_str) = s.split("\r\n\r\n").next() {
                        let headers = self.parse_headers(header_str);
                        if
                            let Some(content_length) = headers
                                .iter()
                                .find(|(k, _)| k == "Content-Length")
                        {
                            info!("Content-Length: {}", content_length.1);
                            let content_length = content_length.1.parse::<usize>().unwrap();
                            let body = s.split("\r\n\r\n").nth(1).unwrap();
                            buffer.extend_from_slice(body.as_bytes());
                            if buffer.len() >= content_length {
                                break;
                            }
                        }
                    }
                }
                Ok(Message::Close(_)) => {
                    info!("Connection closed by server");
                    break;
                }
                Ok(_) => {}
                Err(e) => {
                    error!("Error: {}", e);
                    break;
                }
            }
        }
        self.ws.close(None).await.unwrap();
        Ok(buffer)
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
