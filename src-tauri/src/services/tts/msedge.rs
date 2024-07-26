use log::info;
use tokio::{ io::{ AsyncReadExt, AsyncWriteExt }, net::TcpStream };
use std::error::Error;
use lazy_static::lazy_static;
use uuid::Uuid;

static TRUSTED_CLIENT_TOKEN: &str = "6A5AA1D4EAFF4E9FB37E23D68491D6F4";
lazy_static! {
    static ref SYNTH_URL: String =
        format!("wss://speech.platform.bing.com/consumer/speech/synthesize/readaloud/edge/v1?TrustedClientToken={}", TRUSTED_CLIENT_TOKEN);
}

lazy_static! {
    static ref CLIENT: tokio::sync::Mutex<Option<TcpStream>> = tokio::sync::Mutex::new(None);
}

pub struct MsEdgeTTS {
    text: String,
    speaker: String,
    language: String,
    rate: String,
    pitch: String,
    volume: String,
}

impl MsEdgeTTS {
    pub fn new(
        text: String,
        speaker: String,
        language: String,
        rate: String,
        pitch: String,
        volume: String
    ) -> Self {
        Self {
            text,
            speaker,
            language,
            rate,
            pitch,
            volume,
        }
    }

    pub async fn init_client(&self) -> Result<(), std::io::Error> {
        let mut stream = TcpStream::connect(SYNTH_URL.as_str()).await?;
        let _ = stream.write_all(
            format!(
                r#"Content-Type:application/json; charset=utf-8\r\nPath:speech.config\r\n\r\n
                {{
                    "context": {{
                        "synthesis": {{
                            "audio": {{
                                "metadataoptions": {{
                                    "sentenceBoundaryEnabled": "false",
                                    "wordBoundaryEnabled": "false"
                                }},
                                "outputFormat": "{}" 
                            }}
                            }}
                        }}
                }}
            "#,
                "audio-24khz-96kbitrate-mono-mp3"
            ).as_bytes()
        );
        info!("Connected to MS Edge TTS service");
        *CLIENT.lock().await = Some(stream);
        Ok(())
    }

    pub async fn send(&self) -> Result<Vec<u8>, Box<dyn Error>> {
        let ssml = self.build_ssml();
        let request = format!(
            "X-RequestId:{}\r\nContent-Type:application/ssml+xml\r\nPath:ssml\r\n\r\n{}",
            Uuid::new_v4(),
            ssml
        );
        let mut client = CLIENT.lock().await;
        let stream = client.as_mut().unwrap();
        stream.write_all(request.as_bytes()).await?;
        let mut response = Vec::new();
        stream.read_to_end(&mut response).await?;
        // close the connection
        stream.shutdown().await?;
        *client = None;
        Ok(response)
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
