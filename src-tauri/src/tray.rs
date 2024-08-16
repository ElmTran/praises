use tauri::{ AppHandle, SystemTrayEvent };
use crate::window::show_main_window;
use crate::window::navigate_to_tab;
use crate::constants::TabLocation;

pub(crate) fn build() -> tauri::SystemTray {
    use tauri::{ CustomMenuItem, SystemTray, SystemTrayMenu, SystemTrayMenuItem };

    let quit = CustomMenuItem::new("quit".to_string(), "Quit");
    let show = CustomMenuItem::new("show".to_string(), "Show");
    let setting = CustomMenuItem::new("setting".to_string(), "Setting");

    let menu = SystemTrayMenu::new()
        .add_item(show)
        .add_item(setting)
        .add_native_item(SystemTrayMenuItem::Separator)
        .add_item(quit);

    SystemTray::new().with_menu(menu)
}

pub(crate) fn on_event(app: &AppHandle, event: SystemTrayEvent) {
    use tauri::SystemTrayEvent::{ MenuItemClick, DoubleClick };
    match event {
        MenuItemClick { id, .. } => {
            match id.as_str() {
                "show" => {
                    show_main_window(app);
                }
                "quit" => {
                    app.exit(0);
                }
                "setting" => {
                    navigate_to_tab(app, &TabLocation::Setting);
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
