use serde::{ Deserialize, Serialize };

#[derive(Serialize, Deserialize, Debug)]
pub struct Device {
    label: String,
    value: String,
}

pub fn get_devices() -> Result<Vec<Device>, String> {
    let mut devices = Vec::new();
    devices.push(Device {
        label: "Default".to_string(),
        value: "default".to_string(),
    });
    Ok(devices)
}
