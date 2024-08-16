use strum_macros::{ AsRefStr, Display, EnumString };

pub const MIN_WINDOW_WIDTH: f64 = 900.0;
pub const MIN_WINDOW_HEIGHT: f64 = 600.0;

#[derive(Display, EnumString, AsRefStr)]
pub enum TabLocation {
    #[strum(serialize = "/setting")]
    Setting,
}
