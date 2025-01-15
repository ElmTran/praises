import type { LanguageOption } from "../../constants";
import { $t } from "../../../locales";
import { computed, type ComputedRef } from "vue";

export const arLB: ComputedRef<LanguageOption> = computed(() => ({
  value: "ar-LB",
  label: $t("tts.azure.options.language.ar_LB"),
  speakers: [
    {
      value: "ar-LB-LaylaNeural",
      label: $t("tts.azure.options.speaker.layla"),
      styles: [
        {
          value: "chat",
          label: $t("tts.azure.options.style.chat"),
        },
      ],
    },
    {
      value: "ar-LB-RamiNeural",
      label: $t("tts.azure.options.speaker.rami"),
      styles: [
        {
          value: "chat",
          label: $t("tts.azure.options.style.chat"),
        },
      ],
    },
  ],
}));
