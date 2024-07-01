// Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
use crate::app::HANDLE;
use crate::services::tts::{ azure, windows };
use crate::config;
use tauri::Manager;

#[tauri::command]
pub fn get_windows_devices() -> Result<Vec<windows::Device>, String> {
    windows::get_devices()
}

#[tauri::command]
// TODO: encapsulate the parameters in a struct including service name
pub async fn convert(
    text: &str,
    speaker: &str,
    language: &str,
    style: &str,
    role: &str,
    rate: &str,
    pitch: &str
) -> Result<Vec<u8>, String> {
    azure::request(text, speaker, language, style, role, rate, pitch).await
}

#[tauri::command]
pub fn reload_store() {
    let state = HANDLE.get().unwrap().state::<config::StoreWrapper>();
    let mut store = state.0.lock().unwrap();
    store.load().unwrap();
}
