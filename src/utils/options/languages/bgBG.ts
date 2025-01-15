import type { LanguageOption } from "../../constants";
import { $t } from "../../../locales";
import { computed, type ComputedRef } from "vue";

export const bgBG: ComputedRef<LanguageOption> = computed(() => ({
  value: "bg-BG",
  label: $t("tts.azure.options.language.bg_BG"),
  speakers: [
    {
      value: "bg-BG-KalinaNeural",
      label: $t("tts.azure.options.speaker.kalina"),
      styles: [
        {
          value: "chat",
          label: $t("tts.azure.options.style.chat"),
        },
      ],
    },
    {
      value: "bg-BG-BorislavNeural",
      label: $t("tts.azure.options.speaker.borislav"),
      styles: [
        {
          value: "chat",
          label: $t("tts.azure.options.style.chat"),
        },
      ],
    },
  ],
}));
