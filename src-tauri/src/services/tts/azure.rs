use reqwest::Client;
use crate::config;
use log::info;

fn build_ssml(
    text: &str,
    speaker: &str,
    language: &str,
    style: &str,
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
                <mstts:express-as style="{}">
                    <prosody rate="{}" pitch="{}">
                        {}
                    </prosody>
                </mstts:express-as>
            </voice>
        </speak>
    "#,
        language,
        speaker,
        style,
        rate,
        pitch,
        text
    )
}

async fn send_request(xml: String) -> Result<Vec<u8>, String> {
    let subscription = config::get("azure.subscription").unwrap();
    let endpoint = config::get("azure.endpoint").unwrap();
    let client = Client::new();

    let res = client
        .post(endpoint.to_string())
        .header("Ocp-Apim-Subscription-Key", subscription.to_string())
        .header("Content-Type", "application/ssml+xml")
        .header("X-Microsoft-OutputFormat", "audio-24khz-160kbitrate-mono-mp3")
        .header("User-Agent", "curl")
        .body(xml)
        .send().await;

    match res {
        Ok(res) => {
            if res.status().is_success() {
                let audio = res.bytes().await.unwrap();
                info!("Azure TTS succeeded");
                Ok(audio.to_vec())
            } else {
                Err(format!("Azure TTS failed with status code: {}", res.status()))
            }
        }
        Err(e) => { Err(format!("Azure TTS failed with error: {}", e)) }
    }
}

pub async fn convert(
    text: &str,
    speaker: &str,
    language: &str,
    style: &str,
    rate: &str,
    pitch: &str
) -> Result<Vec<u8>, String> {
    let xml = build_ssml(text, speaker, language, style, rate, pitch);
    send_request(xml).await
}
