import { useAudioStore } from "../store/modules/audio";
import { invoke } from "@tauri-apps/api/tauri";

const store = useAudioStore();

export async function Convert() {
  const audio: string = await invoke("apply", {
    text: "Hello, World!",
    language: "en-US",
    style: "chat",
    speaker: "en-US-AriaNeural",
    rate: "0%",
    pitch: "0%",
  });

  store.setAudio(audio);
}
