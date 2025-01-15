import type { LanguageOption } from "../../constants";
import { $t } from "../../../locales";
import { computed, type ComputedRef } from "vue";

export const esSV: ComputedRef<LanguageOption> = computed(() => ({
  value: "es-SV",
  label: $t("tts.azure.options.language.es_SV"),
  speakers: [
    {
      value: "es-SV-LorenaNeural",
      label: $t("tts.azure.options.speaker.lorena"),
      styles: [
        {
          value: "default",
          label: $t("tts.azure.options.style.default"),
        },
      ],
    },
    {
      value: "es-SV-RodrigoNeural",
      label: $t("tts.azure.options.speaker.rodrigo"),
      styles: [
        {
          value: "default",
          label: $t("tts.azure.options.style.default"),
        },
      ],
    },
  ],
}));
