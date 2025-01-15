import type { LanguageOption } from "../../constants";
import { $t } from "../../../locales";
import { computed, type ComputedRef } from "vue";

export const arBH: ComputedRef<LanguageOption> = computed(() => ({
  value: "ar-BH",
  label: $t("tts.azure.options.language.ar_BH"),
  speakers: [
    {
      value: "ar-BH-LailaNeural",
      label: $t("tts.azure.options.speaker.laila"),
      styles: [
        {
          value: "chat",
          label: $t("tts.azure.options.style.chat"),
        },
      ],
    },
    {
      value: "ar-BH-AliNeural",
      label: $t("tts.azure.options.speaker.ali"),
      styles: [
        {
          value: "chat",
          label: $t("tts.azure.options.style.chat"),
        },
      ],
    },
  ],
}));
