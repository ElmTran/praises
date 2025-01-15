import type { LanguageOption } from "../../constants";
import { $t } from "../../../locales";
import { computed, type ComputedRef } from "vue";   

export const arEG: ComputedRef<LanguageOption> = computed(() => ({  
  value: "ar-EG",
  label: $t("tts.azure.options.language.ar_EG"),
  speakers: [
    {
      value: "ar-EG-SalmaNeural",
      label: $t("tts.azure.options.speaker.salma"),
      styles: [
        {
          value: "chat",
          label: $t("tts.azure.options.style.chat"),
        },
      ],
    },
    {
      value: "ar-EG-ShakirNeural",
      label: $t("tts.azure.options.speaker.shakir"),
      styles: [
        {
          value: "chat",
          label: $t("tts.azure.options.style.chat"),
        },
      ],
    },
  ],
}));
