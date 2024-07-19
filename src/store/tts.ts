import { ref, reactive } from "vue";
import { defineStore } from "pinia";
import { invoke } from "@tauri-apps/api/tauri";
import { Buffer } from "buffer";

export const useTtsStore = defineStore("tts", () => {
  const audioUrl = ref("");
  const state = reactive({
    text: "",
    language: "en-US",
    speaker: "en-US-AriaNeural",
    style: "chat",
    role: "",
    rate: 0,
    pitch: 0,
  });
  async function convert() {
    try {
      const rate = state.rate.toString();
      const pitch = state.pitch.toString();
      const payload = { ...state, rate: rate, pitch: pitch };
      const resp: Uint8Array | string = await invoke("convert", payload);
      if (typeof resp === "string") {
        console.error(`convert error: ${resp}`);
        return;
      }
      audioUrl.value = URL.createObjectURL(
        new Blob([Buffer.from(resp)], { type: "audio/mp3" }),
      );
    } catch (error) {
      console.error(`Failed to convert: ${error}`);
    }
  }
  return { audioUrl, state, convert };
});
