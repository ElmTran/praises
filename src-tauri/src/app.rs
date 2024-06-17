use crate::cmd::*;
use crate::services::tts::{ azure, windows };
use crate::config;
use once_cell::sync::OnceCell;
use log::info;

pub static HANDLE: OnceCell<tauri::AppHandle> = OnceCell::new(); // define a static variable to store the app handle (singleton)

pub struct AppBuidler {
    app: tauri::App,
}

impl AppBuidler {
    pub async fn build() -> Result<Self, tauri::Error> {
        let builder = tauri::Builder
            ::default()
            .plugin(tauri_plugin_fs_watch::init())
            .invoke_handler(tauri::generate_handler![greet, windows::get_devices, azure::speak])
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
                Ok(())
            });

        let app = builder.build(tauri::generate_context!())?;
        Ok(Self { app })
    }

    pub fn run(self) {
        self.app.run(|_, event| {
            if let tauri::RunEvent::ExitRequested { api, .. } = event {
                api.prevent_exit();
            }
        });
    }
}
