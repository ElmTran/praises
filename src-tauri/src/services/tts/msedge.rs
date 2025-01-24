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
    raw_ssml: bool,
    ws: WebSocketStream<MaybeTlsStream<TcpStream>>,
}

enum MessageType {
    TurnStart,
    TurnEnd,
    Response,
    Other(String),
}

impl MessageType {
    fn from_text(text: &str) -> MessageType {
        if text.contains("Path:turn.start") {
            MessageType::TurnStart
        } else if text.contains("Path:turn.end") {
            MessageType::TurnEnd
        } else if text.contains("Path:response") {
            MessageType::Response
        } else {
            MessageType::Other(text.to_string())
        }
    }
}

impl MsEdgeTTS {
    pub async fn new(
        text: String,
        speaker: String,
        language: String,
        rate: String,
        pitch: String,
        volume: String,
        raw_ssml: bool
    ) -> Self {
        let ws = connect_async(SYNTH_URL).await.unwrap().0;
        Self {
            text,
            speaker,
            language,
            rate,
            pitch,
            volume,
            raw_ssml,
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
        info!("Sending ssml: {}", ssml);
        let request = format!(
            "X-RequestId:{}\r\nContent-Type:application/ssml+xml\r\nPath:ssml\r\n\r\n{}",
            Uuid::new_v4(),
            ssml
        );
        self.ws.send(Message::Text(request)).await.unwrap();
    }

    fn process_binary_message(&mut self, data: &Vec<u8>, stream: &mut Vec<u8>) {
        let msg = String::from_utf8_lossy(&data);
        if msg.contains("Path:audio") {
            let binary_delim = b"Path:audio\r\n";
            if
                let Some(start_idx) = data
                    .windows(binary_delim.len())
                    .position(|slice| slice == binary_delim)
            {
                let audio_start = start_idx + binary_delim.len();
                if audio_start < data.len() {
                    // Ensure we don't go out of bounds
                    stream.extend_from_slice(&data[audio_start..]);
                }
            }
        }
    }

    async fn handle_text_message(&mut self, text: &str) -> Result<bool, String> {
        match MessageType::from_text(text) {
            MessageType::TurnStart => {
                info!("Received turn.start");
                Ok(true)
            }
            MessageType::TurnEnd => {
                info!("Received turn.end");
                self.ws.send(Message::Close(None)).await.unwrap();
                Ok(false)
            }
            MessageType::Response => {
                info!("Received response");
                Ok(true)
            }
            MessageType::Other(msg) => {
                debug!("Received other message: {}", msg);
                Ok(true)
            }
        }
    }

    pub async fn receive(&mut self) -> Result<Vec<u8>, String> {
        let mut stream = Vec::new();
        while let Some(message) = self.ws.next().await {
            match message {
                Ok(Message::Binary(data)) => {
                    self.process_binary_message(&data, &mut stream);
                }
                Ok(Message::Text(text)) => {
                    if !self.handle_text_message(&text).await? {
                        break;
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
        Ok(stream)
    }

    fn build_ssml(&self) -> String {
        if self.raw_ssml {
            self.text.clone()
        } else {
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
}
