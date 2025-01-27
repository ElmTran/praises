import type { LanguageOption } from "../../constants";
import { $t } from "../../../locales";
import { computed, type ComputedRef } from "vue";

export const esNI: ComputedRef<LanguageOption> = computed(() => ({
  value: "es-NI",
  label: $t("tts.azure.options.language.es_NI"),
  speakers: [
    {
      value: "es-NI-YolandaNeural",
      label: $t("tts.azure.options.speaker.yolanda"),
      styles: [
        {
          value: "default",
          label: $t("tts.azure.options.style.default"),
        },
      ],
    },
    {
      value: "es-NI-FedericoNeural",
      label: $t("tts.azure.options.speaker.federico"),
      styles: [
        {
          value: "default",
          label: $t("tts.azure.options.style.default"),
        },
      ],
    },
  ],
}));
