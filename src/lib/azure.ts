import { invoke } from "@tauri-apps/api/tauri";
import { store } from "../store/index";

export async function Convert() {
  const audio: ArrayBuffer = await invoke("apply", {
    text: "Hello, World!",
    language: "en-US",
    style: "chat",
    speaker: "en-US-AriaNeural",
    rate: "0%",
    pitch: "0%",
  });
  const audioSrc = URL.createObjectURL(
    new Blob([audio], { type: "audio/wav" })
  );
  store.value.set("audioSrc", audioSrc);
}
