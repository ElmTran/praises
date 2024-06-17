use log::info;

use crate::config;

#[tauri::command]
pub fn speak() -> Result<(), String> {
    let region = config::get("tts.azure.region").unwrap();
    info!("region: {}", region);
    Ok(())
}
