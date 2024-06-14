// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

mod cmd;
mod config;

use cmd::*;
use config::*;
use once_cell::sync::OnceCell;
use log::info;

pub static APP: OnceCell<tauri::AppHandle> = OnceCell::new();

fn main() {
    tauri::Builder
        ::default()
        .plugin(tauri_plugin_fs_watch::init())
        .setup(|app| {
            APP.get_or_init(|| app.handle());
            info!("Hello from Praises!");
            init_config(app);
            // Check First Run
            if is_first_run() {
                info!("First run detected");
                // Set First Run
                set("init", true);
            }
            Ok(())
        })
        .invoke_handler(tauri::generate_handler![greet])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
