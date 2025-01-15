import type { LanguageOption } from "../../constants";
import { $t } from "../../../locales";
import { computed, type ComputedRef } from "vue";
export const afZA: ComputedRef<LanguageOption> = computed(() => ({
  value: "af-ZA",
  label: $t("tts.azure.options.language.af_ZA"),
  speakers: [
    {
      value: "af-ZA-AdriNeural",
      label: $t("tts.azure.options.speaker.adri"),
      styles: [
        {
          value: "chat",
          label: $t("tts.azure.options.style.chat"),
        },
      ],
    },
    {
      value: "af-ZA-WillemNeural",
      label: $t("tts.azure.options.speaker.willem"),
      styles: [
        {
          value: "chat",
          label: $t("tts.azure.options.style.chat"),
        },
      ],
    },
  ],
}));
