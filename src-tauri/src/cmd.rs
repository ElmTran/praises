// Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
use crate::app::HANDLE;
use crate::services::tts::{ azure, windows, msedge, tiktok };
use crate::config;
use crate::hotkeys;
use tauri::Manager;
use log::info;

#[tauri::command]
pub fn get_windows_devices() -> Result<Vec<windows::Device>, String> {
    windows::get_devices()
}

#[tauri::command]
pub async fn convert(
    service: &str,
    text: &str,
    raw_ssml: bool,
    speaker: &str,
    language: &str,
    style: &str,
    role: &str,
    rate: &str,
    pitch: &str,
    volume: &str
) -> Result<Vec<u8>, String> {
    info!(
        "Converting {} to speech using service: {}",
        if raw_ssml {
            "SSML"
        } else {
            "text"
        },
        service
    );
    match service {
        "msedge" => {
            let mut tts = msedge::MsEdgeTTS::new(
                text.to_string(),
                speaker.to_string(),
                language.to_string(),
                rate.to_string(),
                pitch.to_string(),
                volume.to_string(),
                raw_ssml
            ).await;
            tts.init_client().await;
            tts.send().await;
            tts.receive().await
        }
        "azure" => {
            azure::request(text, speaker, language, style, role, rate, pitch, raw_ssml).await
        }
        "tiktok" => { tiktok::request(text, speaker).await }
        _ => Err("Invalid service".to_string()),
    }
}

#[tauri::command]
pub fn reload_store() {
    let state = HANDLE.get().unwrap().state::<config::StoreWrapper>();
    let mut store = state.0.lock().unwrap();
    store.load().unwrap();
}

#[tauri::command]
pub fn register_hotkey(shortcut: &str) {
    info!("Registering hotkey: {}", shortcut);
    hotkeys::register_shortcut_from_frontend(shortcut).unwrap();
}
