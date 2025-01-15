import type { LanguageOption } from "../../constants";
import { $t } from "../../../locales";
import { computed, type ComputedRef } from "vue";

export const zuZA: ComputedRef<LanguageOption> = computed(() => ({
  value: "zu-ZA",
  label: $t("tts.azure.options.language.zu_ZA"),
  speakers: [
    {
      value: "zu-ZA-ThandoNeural",
      label: $t("tts.azure.options.speaker.thando"),
      styles: [
        {
          value: "default",
          label: $t("tts.azure.options.style.default"),
        },
      ],
    },
    {
      value: "zu-ZA-ThembaNeural",
      label: $t("tts.azure.options.speaker.themba"),
      styles: [
        {
          value: "default",
          label: $t("tts.azure.options.style.default"),
        },
      ],
    },
  ],
}));
