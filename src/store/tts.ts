import { ref } from "vue";
import { defineStore } from "pinia";
import { invoke } from "@tauri-apps/api/tauri";
import { Buffer } from "buffer";

export const useTtsStore = defineStore("tts", () => {
  const audioUrl = ref("");
  async function setAudioUrl() {
    try {
      const resp: Uint8Array | string = await invoke("apply", {
        text: "hello world!",
        language: "en-US",
        style: "chat",
        speaker: "en-US-AriaNeural",
        rate: "0%",
        pitch: "0%",
      });
      if (typeof resp === "string") {
        console.error(`convert error: ${resp}`);
        return;
      }
      audioUrl.value = URL.createObjectURL(
        new Blob([Buffer.from(resp)], { type: "audio/mp3" }),
      );
    } catch (error) {
      console.error(`Failed to setAudioUrl: ${error}`);
    }
  }
  return { audioUrl, setAudioUrl };
});
