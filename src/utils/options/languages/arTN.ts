import type { LanguageOption } from "../../constants";
import { $t } from "../../../locales";
import { computed, type ComputedRef } from "vue";   

export const arTN: ComputedRef<LanguageOption> = computed(() => ({
  value: "ar-TN",
  label: $t("tts.azure.options.language.ar_TN"),
  speakers: [
    {
      value: "ar-TN-ReemNeural",
      label: $t("tts.azure.options.speaker.reem"),
      styles: [
        {
          value: "chat",
          label: $t("tts.azure.options.style.chat"),
        },
      ],
    },
    {
      value: "ar-TN-HediNeural",
      label: $t("tts.azure.options.speaker.hedi"),
      styles: [
        {
          value: "chat",
          label: $t("tts.azure.options.style.chat"),
        },
      ],
    },
  ],
}));
