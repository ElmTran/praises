import type { LanguageOption } from "../../constants";
import { $t } from "../../../locales";
import { computed, type ComputedRef } from "vue";

export const bsBA: ComputedRef<LanguageOption> = computed(() => ({
  value: "bs-BA",
  label: $t("tts.azure.options.language.bs_BA"),
  speakers: [
    {
      value: "bs-BA-VesnaNeural",
      label: $t("tts.azure.options.speaker.vesna"),
      styles: [
        {
          value: "chat",
          label: $t("tts.azure.options.style.chat"),
        },
      ],
    },
    {
      value: "bs-BA-GoranNeural",
      label: $t("tts.azure.options.speaker.goran"),
      styles: [
        {
          value: "chat",
          label: $t("tts.azure.options.style.chat"),
        },
      ],
    },
  ],
}));
