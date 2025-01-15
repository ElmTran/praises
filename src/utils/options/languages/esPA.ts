import type { LanguageOption } from "../../constants";
import { $t } from "../../../locales";
import { computed, type ComputedRef } from "vue";

export const esPA: ComputedRef<LanguageOption> = computed(() => ({
  value: "es-PA",
  label: $t("tts.azure.options.language.es_PA"),
  speakers: [
    {
      value: "es-PA-MargaritaNeural",
      label: $t("tts.azure.options.speaker.margarita"),
      styles: [
        {
          value: "default",
          label: $t("tts.azure.options.style.default"),
        },
      ],
    },
    {
      value: "es-PA-RobertoNeural",
      label: $t("tts.azure.options.speaker.roberto"),
      styles: [
        {
          value: "default",
          label: $t("tts.azure.options.style.default"),
        },
      ],
    },
  ],
}));
