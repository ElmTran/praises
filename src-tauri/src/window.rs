use tauri::{ AppHandle, Manager, Menu, WindowBuilder, WindowUrl };
use crate::constants::{ TabLocation, MIN_WINDOW_HEIGHT, MIN_WINDOW_WIDTH };
use crate::event::ClientEvent;

pub(crate) fn show_main_window(app: &AppHandle) {
    app.get_window("main").unwrap().show().unwrap();
}

pub(crate) fn navigate_to_tab(app: &AppHandle, tab_url: &TabLocation) {
    let tab_url = tab_url.to_string();

    let window = if let Some(window) = app.get_window("main") {
        window
    } else {
        WindowBuilder::new(app, "main".to_string(), WindowUrl::App(tab_url.clone().into()))
            .menu(Menu::new())
            .min_inner_size(MIN_WINDOW_WIDTH, MIN_WINDOW_HEIGHT)
            .build()
            .expect("Unable to build window for main")
    };
    let _ = window.emit(ClientEvent::Navigate.as_ref(), tab_url);
    show_main_window(app)
}
