mod cmd;
mod services;
mod config;

use cmd::*;
use services::tts::windows;
use once_cell::sync::OnceCell;

pub static APP: OnceCell<tauri::AppHandle> = OnceCell::new();

pub fn create_tauri_app<R: tauri::Runtime>(builder: tauri::Builder<R>) -> tauri::Builder<R> {
    builder
        .plugin(tauri_plugin_fs_watch::init())
        .invoke_handler(tauri::generate_handler![greet, windows::get_devices])
}
