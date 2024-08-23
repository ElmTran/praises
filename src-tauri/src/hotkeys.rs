use crate::app::HANDLE;
use crate::config::{ get, set };
use crate::event::ClientEvent;
use tauri::{ AppHandle, GlobalShortcutManager, Manager };
use log::{ info, warn };

fn register<F>(app_handle: &AppHandle, name: &str, handler: F, key: &str) -> Result<(), String>
    where F: Fn() + Send + 'static
{
    let hotkey = {
        if key.is_empty() {
            match get(name) {
                Some(v) => {
                    info!("Loaded hotkey: {} for {}", v, name);
                    v.as_str().unwrap().to_string()
                }
                None => {
                    set(name, "");
                    String::new()
                }
            }
        } else {
            key.to_string()
        }
    };

    if !hotkey.is_empty() {
        match app_handle.global_shortcut_manager().register(hotkey.as_str(), handler) {
            Ok(()) => {
                info!("Registered global shortcut: {} for {}", hotkey, name);
            }
            Err(e) => {
                warn!("Failed to register global shortcut: {} {:?}", hotkey, e);
                return Err(e.to_string());
            }
        };
    }
    Ok(())
}

fn listen_to_selection() {
    use selection::get_text;
    let text = get_text();
    let window = HANDLE.get().unwrap().get_window("main").unwrap();
    if !text.is_empty() {
        info!("Listening to selection: {}", text);
        let _ = window.emit(ClientEvent::PlayAudio.as_ref(), text);
    }
}

pub fn register_shortcut(shortcut: &str) -> Result<(), String> {
    let app_handle = HANDLE.get().unwrap();
    match shortcut {
        "all" => register(app_handle, "hotkey_listen_to_selection", listen_to_selection, "")?,
        _ => {}
    }
    Ok(())
}

pub fn register_shortcut_from_frontend(shortcut: &str) -> Result<(), String> {
    let app_handle = HANDLE.get().unwrap();
    register(app_handle, "hotkey_listen_to_selection", listen_to_selection, shortcut)
}
