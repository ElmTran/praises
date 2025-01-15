import type { LanguageOption } from "../../constants";
import { $t } from "../../../locales";
import { computed, type ComputedRef } from "vue";

export const mlIN: ComputedRef<LanguageOption> = computed(() => ({
  value: "ml-IN",
  label: $t("tts.azure.options.language.ml_IN"),
  speakers: [
    {
      value: "ml-IN-SobhanaNeural",
      label: $t("tts.azure.options.speaker.sobhana"),
      styles: [
        {
          value: "default",
          label: $t("tts.azure.options.style.default"),
        },
      ],
    },
    {
      value: "ml-IN-MidhunNeural",
      label: $t("tts.azure.options.speaker.midhun"),
      styles: [
        {
          value: "default",
          label: $t("tts.azure.options.style.default"),
        },
      ],
    },
  ],
}));
