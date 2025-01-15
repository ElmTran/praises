import type { LanguageOption } from "../../constants";
import { $t } from "../../../locales";
import { computed, type ComputedRef } from "vue";

export const arMA: ComputedRef<LanguageOption> = computed(() => ({
  value: "ar-MA",
  label: $t("tts.azure.options.language.ar_MA"),
  speakers: [
    {
      value: "ar-MA-MounaNeural",
      label: $t("tts.azure.options.speaker.mouna"),
      styles: [
        {
          value: "chat",
          label: $t("tts.azure.options.style.chat"),
        },
      ],
    },
    {
      value: "ar-MA-JamalNeural",
      label: $t("tts.azure.options.speaker.jamal"),
      styles: [
        {
          value: "chat",
          label: $t("tts.azure.options.style.chat"),
        },
      ],
    },
  ],
}));
