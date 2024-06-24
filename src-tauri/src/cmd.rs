// Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
use crate::services::tts::{ azure, windows };
use crate::libs::audio;

#[tauri::command]
pub fn get_windows_devices() -> Result<Vec<windows::Device>, String> {
    windows::get_devices()
}

#[tauri::command]
// TODO: encapsulate the parameters in a struct including service name
pub async fn speak(
    text: &str,
    speaker: &str,
    language: &str,
    style: &str,
    rate: &str,
    pitch: &str
) -> Result<(), String> {
    let audio = azure::convert(text, speaker, language, style, rate, pitch).await;
    match audio {
        Ok(audio) => { audio::play_async(&audio).await.map_err(|e| e.to_string()) }
        Err(e) => Err(e.to_string()),
    }
}
