import { invoke } from "@tauri-apps/api/tauri";

export interface DeviceOption {
  label: string;
  value: string;
}

export async function getDevices(): Promise<DeviceOption[]> {
  return await invoke("get_devices");
}
