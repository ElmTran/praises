import type { LanguageOption } from "../../constants";
import { $t } from "../../../locales";
import { computed, type ComputedRef } from "vue";

export const svSE: ComputedRef<LanguageOption> = computed(() => ({
  value: "sv-SE",
  label: $t("tts.azure.options.language.sv_SE"),
  speakers: [
    {
      value: "sv-SE-SofieNeural",
      label: $t("tts.azure.options.speaker.sofie"),
      styles: [
        {
          value: "default",
          label: $t("tts.azure.options.style.default"),
        },
      ],
    },
    {
      value: "sv-SE-MattiasNeural",
      label: $t("tts.azure.options.speaker.mattias"),
      styles: [
        {
          value: "default",
          label: $t("tts.azure.options.style.default"),
        },
      ],
    },
    {
      value: "sv-SE-HilleviNeural",
      label: $t("tts.azure.options.speaker.hillevi"),
      styles: [
        {
          value: "default",
          label: $t("tts.azure.options.style.default"),
        },
      ],
    },
  ],
}));
