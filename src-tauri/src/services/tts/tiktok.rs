use reqwest::Client;
use serde_json::json;
use std::error::Error;
use base64::Engine;

static ENDPOINT: &str = "https://tiktok-tts.weilnet.workers.dev/api/generation";

pub struct TikTokTTS {
    text: String,
    voice: String,
}

impl TikTokTTS {
    pub fn new(text: String, voice: String) -> Self {
        Self { text, voice }
    }

    pub async fn send(&self) -> Result<Vec<u8>, Box<dyn Error>> {
        let client = Client::new();
        let res = client
            .post(ENDPOINT)
            .header("Content-Type", "application/json")
            .json(
                &json!({
                "text": self.text,
                "voice": self.voice,
            })
            )
            .send().await?;
        let res = res.error_for_status()?;
        let data = res.json::<serde_json::Value>().await?;
        if !data["success"].as_bool().unwrap_or(false) || !data.get("data").is_some() {
            return Err(format!("TikTok API error: {:?}", data).into());
        }
        let audio_base64 = data["data"].as_str().ok_or("Invalid audio data")?;
        let audio = base64::prelude::BASE64_STANDARD.decode(audio_base64)?;
        Ok(audio)
    }
}

pub async fn request(text: &str, voice: &str) -> Result<Vec<u8>, String> {
    let tts = TikTokTTS::new(text.to_string(), voice.to_string());
    tts.send().await.map_err(|e| e.to_string())
}
