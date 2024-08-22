use strum_macros::{ AsRefStr, Display };

#[derive(AsRefStr, Display)]
pub enum ClientEvent {
    Navigate,
    PlayAudio,
}
