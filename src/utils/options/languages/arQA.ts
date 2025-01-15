import type { LanguageOption } from "../../constants";
import { $t } from "../../../locales";
import { computed, type ComputedRef } from "vue";

export const arQA: ComputedRef<LanguageOption> = computed(() => ({
  value: "ar-QA",
  label: $t("tts.azure.options.language.ar_QA"),
  speakers: [
    {
      value: "ar-QA-MoazNeural",
      label: $t("tts.azure.options.speaker.moaz"),
      styles: [
        {
          value: "chat",
          label: $t("tts.azure.options.style.chat"),
        },
      ],
    },
    {
      value: "ar-QA-AmalNeural",
      label: $t("tts.azure.options.speaker.amal"),
      styles: [
        {
          value: "chat",
          label: $t("tts.azure.options.style.chat"),
        },
      ],
    },
  ],
}));
