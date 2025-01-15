import type { LanguageOption } from "../../constants";
import { $t } from "../../../locales";
import { computed, type ComputedRef } from "vue";

export const paIN: ComputedRef<LanguageOption> = computed(() => ({
  value: "pa-IN",
  label: $t("tts.azure.options.language.pa_IN"),
  speakers: [
    {
      value: "pa-IN-OjasNeural",
      label: $t("tts.azure.options.speaker.ojas"),
      styles: [
        {
          value: "default",
          label: $t("tts.azure.options.style.default"),
        }
      ],
    },
    {
      value: "pa-IN-VaaniNeural",
      label: $t("tts.azure.options.speaker.vaani"),
      styles: [
        {
          value: "default",
          label: $t("tts.azure.options.style.default"),
        }
      ],
    },
  ],
}));
