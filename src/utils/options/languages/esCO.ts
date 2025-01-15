import type { LanguageOption } from "../../constants";
import { $t } from "../../../locales";
import { computed, type ComputedRef } from "vue";

export const esCO: ComputedRef<LanguageOption> = computed(() => ({
  value: "es-CO",
  label: $t("tts.azure.options.language.es_CO"),
  speakers: [
    {
      value: "es-CO-MariaNeural",
      label: $t("tts.azure.options.speaker.maria"),
      styles: [
        {
          value: "default",
          label: $t("tts.azure.options.style.default"),
        },
      ],
    },
    {
      value: "es-CO-JuanNeural",
      label: $t("tts.azure.options.speaker.juan"),
      styles: [
        {
          value: "default",
          label: $t("tts.azure.options.style.default"),
        },
      ],
    },
  ],
}));
