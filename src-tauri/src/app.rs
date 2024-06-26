use crate::config;
use crate::cmd::*;
use once_cell::sync::OnceCell;
use log::info;
use log::LevelFilter;
use env_logger;

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
            .invoke_handler(tauri::generate_handler![get_windows_devices, apply, reload_store])
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
