import type { LanguageOption } from "../../constants";
import { $t } from "../../../locales";
import { computed, type ComputedRef } from "vue";

export const esDO: ComputedRef<LanguageOption> = computed(() => ({
  value: "es-DO",
  label: $t("tts.azure.options.language.es_DO"),
  speakers: [
    {
      value: "es-DO-RamonaNeural",
      label: $t("tts.azure.options.speaker.ramona"),
      styles: [
        {
          value: "default",
          label: $t("tts.azure.options.style.default"),
        },
      ],
    },
    {
      value: "es-DO-EmilioNeural",
      label: $t("tts.azure.options.speaker.emilio"),
      styles: [
        {
          value: "default",
          label: $t("tts.azure.options.style.default"),
        },
      ],
    },
  ],
}));
