import { defineStore } from "pinia";
import { ref } from "vue";

export const useAudioStore = defineStore("audio", () => {
  const audio = ref("");
  const setAudio = (value: string) => {
    audio.value = value;
  };
  return { audio, setAudio };
});
