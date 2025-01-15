import type { LanguageOption } from "../../constants";
import { $t } from "../../../locales";
import { computed, type ComputedRef } from "vue";

export const urIN: ComputedRef<LanguageOption> = computed(() => ({
  value: "ur-IN",
  label: $t("tts.azure.options.language.ur_IN"),
  speakers: [
    {
      value: "ur-IN-GulNeural",
      label: $t("tts.azure.options.speaker.gul"),
      styles: [
        {
          value: "default",
          label: $t("tts.azure.options.style.default"),
        },
      ],
    },
    {
      value: "ur-IN-SalmanNeural",
      label: $t("tts.azure.options.speaker.salman"),
      styles: [
        {
          value: "default",
          label: $t("tts.azure.options.style.default"),
        },
      ],
    },
  ],
}));
