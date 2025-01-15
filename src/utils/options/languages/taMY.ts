import type { LanguageOption } from "../../constants";
import { $t } from "../../../locales";
import { computed, type ComputedRef } from "vue";

export const taMY: ComputedRef<LanguageOption> = computed(() => ({
  value: "ta-MY",
  label: $t("tts.azure.options.language.ta_MY"),
  speakers: [
    {
      value: "ta-MY-KaniNeural",
      label: $t("tts.azure.options.speaker.kani"),
      styles: [
        {
          value: "default",
          label: $t("tts.azure.options.style.default"),
        },
      ],
    },
    {
      value: "ta-MY-SuryaNeural",
      label: $t("tts.azure.options.speaker.surya"),
      styles: [
        {
          value: "default",
          label: $t("tts.azure.options.style.default"),
        },
      ],
    },
  ],
}));
