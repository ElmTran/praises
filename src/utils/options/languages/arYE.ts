import type { LanguageOption } from "../../constants";
import { $t } from "../../../locales";
import { computed, type ComputedRef } from "vue";

export const arYE: ComputedRef<LanguageOption> = computed(() => ({
  value: "ar-YE",
  label: $t("tts.azure.options.language.ar_YE"),
  speakers: [
    {
      value: "ar-YE-MaryamNeural",
      label: $t("tts.azure.options.speaker.maryam"),
      styles: [
        {
          value: "chat",
          label: $t("tts.azure.options.style.chat"),
        },
      ],
    },
    {
      value: "ar-YE-SalehNeural",
      label: $t("tts.azure.options.speaker.saleh"),
      styles: [
        {
          value: "chat",
          label: $t("tts.azure.options.style.chat"),
        },
      ],
    },
  ],
}));
