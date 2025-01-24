use reqwest::Client;
use crate::config;
use std::error::Error;
use reqwest::Url;

fn build_ssml(
    text: &str,
    speaker: &str,
    language: &str,
    style: &str,
    role: &str,
    rate: &str,
    pitch: &str
) -> String {
    format!(
        r#"
        <speak version="1.0"
                xmlns="http://www.w3.org/2001/10/synthesis"
                xmlns:mstts="http://www.w3.org/2001/mstts"
                xmlns:emo="http://www.w3.org/2009/10/emotionml"
                xml:lang="{}"
            >
            <voice name="{}">
                <mstts:express-as style="{}" role="{}">
                    <prosody rate="{}%" pitch="{}%">
                        {}
                    </prosody>
                </mstts:express-as>
            </voice>
        </speak>
    "#,
        language,
        speaker,
        style,
        role,
        rate,
        pitch,
        text
    )
}

async fn send(xml: String) -> Result<Vec<u8>, Box<dyn Error>> {
    let endpoint = match config::get("azure.endpoint") {
        Some(v) => Url::parse(v.as_str().ok_or("Azure endpoint must be a string")?)?,
        None => {
            return Err("Missing Azure endpoint".into());
        }
    };
    let subscription = match config::get("azure.subscription") {
        Some(v) => v.as_str().ok_or("Azure subscription key must be a string")?.to_string(),
        None => {
            return Err("Missing Azure subscription key".into());
        }
    };
    let client = Client::new();
    let res = client
        .post(endpoint)
        .header("Ocp-Apim-Subscription-Key", subscription)
        .header("Content-Type", "application/ssml+xml")
        .header("X-Microsoft-OutputFormat", "audio-24khz-160kbitrate-mono-mp3")
        .header("User-Agent", "curl")
        .body(xml)
        .send().await?;

    if res.status().is_success() {
        let audio = res.bytes().await?;
        Ok(audio.to_vec())
    } else {
        Err(format!("Azure TTS failed with status code: {}", res.status()).into())
    }
}

pub async fn request(
    text: &str,
    speaker: &str,
    language: &str,
    style: &str,
    role: &str,
    rate: &str,
    pitch: &str,
    raw_ssml: bool
) -> Result<Vec<u8>, String> {
    let xml = if raw_ssml {
        text.to_string()
    } else {
        build_ssml(text, speaker, language, style, role, rate, pitch)
    };
    send(xml).await.map_err(|e| format!("Azure TTS failed: {}", e))
}
