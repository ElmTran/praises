// Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
use crate::app::HANDLE;
use crate::services::tts::{ azure, windows };
use crate::config;
use log::{ info, error };
use std::fs::write;
use tauri::Manager;
use tauri::api::path::cache_dir;

#[tauri::command]
pub fn get_windows_devices() -> Result<Vec<windows::Device>, String> {
    windows::get_devices()
}

#[tauri::command]
// TODO: encapsulate the parameters in a struct including service name
pub async fn apply(
    text: &str,
    speaker: &str,
    language: &str,
    style: &str,
    rate: &str,
    pitch: &str
) -> Result<(), String> {
    let audio = azure::convert(text, speaker, language, style, rate, pitch).await;
    match audio {
        Ok(audio) => {
            let temp_dir = cache_dir().ok_or("Failed to get cache directory".to_string())?;
            let temp_file_path = temp_dir.join("temp_audio.mp3");
            write(&temp_file_path, &audio).map_err(|e|
                format!("Failed to write audio to file: {}", e)
            )?;
            info!("Audio file written to: {:?}", temp_file_path);
            config::set("audioSrc", temp_file_path.to_str().unwrap());
            Ok(())
        }
        Err(e) => {
            error!("Failed to convert text to audio: {}", e);
            Err("Failed to convert text to audio".to_string())
        }
    }
}

#[tauri::command]
pub fn reload_store() {
    let state = HANDLE.get().unwrap().state::<config::StoreWrapper>();
    let mut store = state.0.lock().unwrap();
    store.load().unwrap();
}
