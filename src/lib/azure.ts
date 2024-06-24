import { invoke } from "@tauri-apps/api/tauri";

export async function Convert(): Promise<string> {
  return await invoke("speak", { text: "Hello, World!" });
}