import type { LanguageOption } from "../../constants";
import { $t } from "../../../locales";
import { computed, type ComputedRef } from "vue";

export const arIQ: ComputedRef<LanguageOption> = computed(() => ({
  value: "ar-IQ",
  label: $t("tts.azure.options.language.ar_IQ"),
  speakers: [
    {
      value: "ar-IQ-RanaNeural",
      label: $t("tts.azure.options.speaker.rana"),
      styles: [
        {
          value: "chat",
          label: $t("tts.azure.options.style.chat"),
        },
      ],
    },
    {
      value: "ar-IQ-BasselNeural",
      label: $t("tts.azure.options.speaker.bassel"),
      styles: [
        {
          value: "chat",
          label: $t("tts.azure.options.style.chat"),
        },
      ],
    },
  ],
}));
