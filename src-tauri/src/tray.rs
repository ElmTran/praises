use tauri::{ AppHandle, Manager, SystemTrayEvent };
use crate::window::show_main_window;

pub(crate) fn build() -> tauri::SystemTray {
    use tauri::{ CustomMenuItem, SystemTray, SystemTrayMenu, SystemTrayMenuItem };

    let quit = CustomMenuItem::new("quit".to_string(), "Quit");
    let show = CustomMenuItem::new("show".to_string(), "Show");
    let settings = CustomMenuItem::new("settings".to_string(), "Settings");

    let menu = SystemTrayMenu::new()
        .add_item(show)
        .add_item(settings)
        .add_native_item(SystemTrayMenuItem::Separator)
        .add_item(quit);

    SystemTray::new().with_menu(menu)
}

pub(crate) fn on_event(app: &AppHandle, event: SystemTrayEvent) {
    use SystemTrayEvent::*;

    match event {
        MenuItemClick { id, .. } => {
            match id.as_str() {
                "show" => {
                    show_main_window(app);
                }
                "quit" => {
                    app.exit(0);
                }
                "settings" => {
                    show_main_window(app);
                    app.emit_all("open-settings", ()).unwrap();
                }
                _ => {}
            }
        }
        DoubleClick { .. } => {
            show_main_window(app);
        }
        _ => {}
    }
}
