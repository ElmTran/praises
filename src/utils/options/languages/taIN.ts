import type { LanguageOption } from "../../constants";
import { $t } from "../../../locales";
import { computed, type ComputedRef } from "vue";

export const taIN: ComputedRef<LanguageOption> = computed(() => ({
  value: "ta-IN",
  label: $t("tts.azure.options.language.ta_IN"),
  speakers: [
    {
      value: "ta-IN-PallaviNeural",
      label: $t("tts.azure.options.speaker.pallavi"),
      styles: [
        {
          value: "default",
          label: $t("tts.azure.options.style.default"),
        },
      ],
    },
    {
      value: "ta-IN-ValluvarNeural",
      label: $t("tts.azure.options.speaker.valluvar"),
      styles: [
        {
          value: "default",
          label: $t("tts.azure.options.style.default"),
        },
      ],
    },
  ],
}));
