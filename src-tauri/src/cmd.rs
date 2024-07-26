// Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
use crate::app::HANDLE;
use crate::services::tts::{ azure, windows, msedge };
use crate::config;
use tauri::Manager;

#[tauri::command]
pub fn get_windows_devices() -> Result<Vec<windows::Device>, String> {
    windows::get_devices()
}

#[tauri::command]
// TODO: encapsulate the parameters in a struct including service name
pub async fn convert(
    service: &str,
    text: &str,
    speaker: &str,
    language: &str,
    style: &str,
    role: &str,
    rate: &str,
    pitch: &str,
    volume: &str
) -> Result<Vec<u8>, String> {
    match service {
        "msedge" => {
            let tts = msedge::MsEdgeTTS::new(
                text.to_string(),
                speaker.to_string(),
                language.to_string(),
                rate.to_string(),
                pitch.to_string(),
                volume.to_string()
            );
            tts.init_client().await.map_err(|err| err.to_string())?;
            tts.send().await.map_err(|err| err.to_string())
        }
        "azure" => { azure::request(text, speaker, language, style, role, rate, pitch).await }
        _ => Err("Invalid service".to_string()),
    }
}

#[tauri::command]
pub fn reload_store() {
    let state = HANDLE.get().unwrap().state::<config::StoreWrapper>();
    let mut store = state.0.lock().unwrap();
    store.load().unwrap();
}
