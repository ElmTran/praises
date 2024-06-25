// Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
use crate::services::tts::{ azure, windows };
use crate::config;
use crate::libs::audio;
use tempfile::NamedTempFile;
use std::io::Write;
use log::{ info, error };

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
    // TODO: 转化有问题，需要修改
    match audio {
        Ok(audio) => {
            audio::play_async(&audio).await.map_err(|e| format!("Failed to play audio: {}", e))?;
            let mut temp_file = NamedTempFile::new().map_err(|e|
                format!("Failed to create temporary file: {}", e)
            )?;
            temp_file
                .write_all(&audio)
                .map_err(|e| format!("Failed to write audio to temporary file: {}", e))?;
            info!("Audio saved to: {}", temp_file.path().to_str().unwrap());
            config::set("audioSrc", temp_file.path().to_str().unwrap());
            Ok(())
        }
        Err(e) => {
            error!("Failed to convert text to audio: {}", e);
            Err(e)
        }
    }
}
