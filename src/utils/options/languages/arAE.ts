import type { LanguageOption } from "../../constants";
import { $t } from "../../../locales";
import { computed, type ComputedRef } from "vue";

export const arAE: ComputedRef<LanguageOption> = computed(() => ({
  value: "ar-AE",
  label: $t("tts.azure.options.language.ar_AE"),
  speakers: [
    {
      value: "ar-AE-FatimaNeural",
      label: $t("tts.azure.options.speaker.fatima"),
      styles: [
        {
          value: "chat",
          label: $t("tts.azure.options.style.chat"),
        },
      ],
    },
    {
      value: "ar-AE-HamdanNeural",
      label: $t("tts.azure.options.speaker.hamdan"),
      styles: [
        {
          value: "chat",
          label: $t("tts.azure.options.style.chat"),
        },
      ],
    },
  ],
}));
