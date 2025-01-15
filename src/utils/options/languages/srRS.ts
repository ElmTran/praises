import type { LanguageOption } from "../../constants";
import { $t } from "../../../locales";
import { computed, type ComputedRef } from "vue";

export const srRS: ComputedRef<LanguageOption> = computed(() => ({
  value: "sr-RS",
  label: $t("tts.azure.options.language.sr_RS"),
  speakers: [
    {
      value: "sr-RS-SophieNeural",
      label: $t("tts.azure.options.speaker.sophie"),
      styles: [
        {
          value: "default",
          label: $t("tts.azure.options.style.default"),
        },
      ],
    },
    {
      value: "sr-RS-NicholasNeural",
      label: $t("tts.azure.options.speaker.nicholas"),
      styles: [
        {
          value: "default",
          label: $t("tts.azure.options.style.default"),
        },
      ],
    },
  ],
}));
