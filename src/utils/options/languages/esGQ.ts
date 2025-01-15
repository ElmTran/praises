import type { LanguageOption } from "../../constants";
import { $t } from "../../../locales";
import { computed, type ComputedRef } from "vue";

export const esGQ: ComputedRef<LanguageOption> = computed(() => ({
  value: "es-GQ",
  label: $t("tts.azure.options.language.es_GQ"),
  speakers: [
    {
      value: "es-GQ-TeresaNeural",
      label: $t("tts.azure.options.speaker.teresa"),
      styles: [
        {
          value: "default",
          label: $t("tts.azure.options.style.default"),
        },
      ],
    },
    {
      value: "es-GQ-JavierNeural",
      label: $t("tts.azure.options.speaker.javier"),
      styles: [
        {
          value: "default",
          label: $t("tts.azure.options.style.default"),
        },
      ],
    },
  ],
}));
