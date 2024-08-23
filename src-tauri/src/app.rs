use crate::config;
use crate::cmd::*;
use crate::hotkeys::register_shortcut;
use once_cell::sync::OnceCell;
use log::info;
use log::LevelFilter;
use env_logger;
#[cfg(any(target_os = "macos", target_os = "windows"))]
use window_shadows::set_shadow;
use tauri::{ RunEvent, Manager };

pub static HANDLE: OnceCell<tauri::AppHandle> = OnceCell::new(); // define a static variable to store the app handle (singleton)

pub struct AppBuidler {
    app: tauri::App,
}

impl AppBuidler {
    pub async fn build() -> Result<Self, tauri::Error> {
        env_logger::builder().filter_level(LevelFilter::Info).init();
        let builder = tauri::Builder
            ::default()
            .plugin(tauri_plugin_fs_watch::init())
            .plugin(tauri_plugin_store::Builder::default().build())
            .invoke_handler(
                tauri::generate_handler![
                    get_windows_devices,
                    convert,
                    reload_store,
                    register_hotkey
                ]
            )
            .setup(|app| {
                // define a closure to setup the app
                HANDLE.get_or_init(|| app.handle());
                info!("Hello from Praises!");
                config::init_config(app);
                // Check First Run
                if config::is_first_run() {
                    info!("First run detected");
                    // Set First Run
                    config::set("init", true);
                }
                let window = app.get_window("main").unwrap();
                set_shadow(&window, true).unwrap();
                register_shortcut("all").unwrap();
                Ok(())
            });

        #[cfg(not(target_os = "macos"))]
        let builder = builder
            .system_tray(crate::tray::build())
            .on_system_tray_event(crate::tray::on_event);

        let app = builder.build(tauri::generate_context!())?;
        Ok(Self { app })
    }

    pub fn run(self) {
        self.app.run(|app, event| {
            match event {
                RunEvent::Exit => {}
                RunEvent::ExitRequested { .. } => {}
                RunEvent::WindowEvent { .. } => {}
                RunEvent::Ready =>
                    match app.get_window("main") {
                        None => {}
                        Some(win) => {
                            let _ = win.show();
                        }
                    }
                _ => {}
            }
        });
    }
}
