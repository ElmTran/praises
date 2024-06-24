import { invoke } from "@tauri-apps/api/tauri";

export async function Convert(): Promise<string> {
  return await invoke("speak", {
    text: "Hello, World!",
    language: "en-US",
    style: "chat",
    speaker: "en-US-AriaNeural",
    rate: "0%",
    pitch: "0%",
  });
}
