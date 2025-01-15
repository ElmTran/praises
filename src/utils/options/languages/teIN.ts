// te-IN file created
import type { LanguageOption } from "../../constants";
import { $t } from "../../../locales";
import { computed, type ComputedRef } from "vue";

export const teIN: ComputedRef<LanguageOption> = computed(() => ({
  value: "te-IN",
  label: $t("tts.azure.options.language.te_IN"),
  speakers: [
    {
      value: "te-IN-ShrutiNeural",
      label: $t("tts.azure.options.speaker.shruti"),
      styles: [
        {
          value: "default",
          label: $t("tts.azure.options.style.default"),
        },
      ],
    },
    {
      value: "te-IN-MohanNeural",
      label: $t("tts.azure.options.speaker.mohan"),
      styles: [
        {
          value: "default",
          label: $t("tts.azure.options.style.default"),
        },
      ],
    },
  ],
}));
