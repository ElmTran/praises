import type { LanguageOption } from "../../constants";
import { $t } from "../../../locales";
import { computed, type ComputedRef } from "vue";

export const taSG: ComputedRef<LanguageOption> = computed(() => ({
  value: "ta-SG",
  label: $t("tts.azure.options.language.ta_SG"),
  speakers: [
    {
      value: "ta-SG-VenbaNeural",
      label: $t("tts.azure.options.speaker.venba"),
      styles: [
        {
          value: "default",
          label: $t("tts.azure.options.style.default"),
        },
      ],
    },
    {
      value: "ta-SG-AnbuNeural",
      label: $t("tts.azure.options.speaker.anbu"),
      styles: [
        {
          value: "default",
          label: $t("tts.azure.options.style.default"),
        },
      ],
    },
  ],
}));
