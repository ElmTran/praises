// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]
mod config;

use praises::*;
use config::*;
use log::info;

fn main() {
    create_tauri_app(tauri::Builder::default())
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
        .run(tauri::generate_context!())
        .expect("error while running tauri application")
}
