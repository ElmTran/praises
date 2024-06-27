import { invoke } from "@tauri-apps/api/tauri";

export async function Convert() {
  await invoke("apply", {
    text: "Hello, World!",
    language: "en-US",
    style: "chat",
    speaker: "en-US-AriaNeural",
    rate: "0%",
    pitch: "0%",
  });
}
