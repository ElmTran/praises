// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

mod app;
mod cmd;
mod tray;
mod config;
mod error;
mod services;
mod window;

#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
    app::AppBuidler::build().await?.run();

    Ok(())
}
