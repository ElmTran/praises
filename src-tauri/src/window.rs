use tauri::{ AppHandle, Manager };

pub(crate) fn show_main_window(app: &AppHandle) {
    app.get_window("main").unwrap().show().unwrap();
}
