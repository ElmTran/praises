import type { LanguageOption } from "../../constants";
import { $t } from "../../../locales";
import { computed, type ComputedRef } from "vue";

export const esVE: ComputedRef<LanguageOption> = computed(() => ({  
  value: "es-VE",
  label: $t("tts.azure.options.language.es_VE"),
  speakers: [
    {
      value: "es-VE-PaolaNeural",
      label: $t("tts.azure.options.speaker.paola"),
      styles: [
        {
          value: "default",
          label: $t("tts.azure.options.style.default"),
        },
      ],
    },
    {
      value: "es-VE-SebastianNeural",
      label: $t("tts.azure.options.speaker.sebastian"),
      styles: [
        {
          value: "default",
          label: $t("tts.azure.options.style.default"),
        },
      ],
    },
  ],
}));
