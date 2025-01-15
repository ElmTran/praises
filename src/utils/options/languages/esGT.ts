import type { LanguageOption } from "../../constants";
import { $t } from "../../../locales";
import { computed, type ComputedRef } from "vue";

export const esGT: ComputedRef<LanguageOption> = computed(() => ({
  value: "es-GT",
  label: $t("tts.azure.options.language.es_GT"),
  speakers: [
    {
      value: "es-GT-MartaNeural",
      label: $t("tts.azure.options.speaker.marta"),
      styles: [
        {
          value: "default",
          label: $t("tts.azure.options.style.default"),
        },
      ],
    },
    {
      value: "es-GT-AndresNeural",
      label: $t("tts.azure.options.speaker.andres"),
      styles: [
        {
          value: "default",
          label: $t("tts.azure.options.style.default"),
        },
      ],
    },
  ],
}));

