import type { LanguageOption } from "../../constants";
import { $t } from "../../../locales";
import { computed, type ComputedRef } from "vue";

export const cyGB: ComputedRef<LanguageOption> = computed(() => ({
  value: "cy-GB",
  label: $t("tts.azure.options.language.cy_GB"),
  speakers: [
    {
      value: "cy-GB-NiaNeural",
      label: $t("tts.azure.options.speaker.nia"),
      styles: [
        {
          value: "chat",
          label: $t("tts.azure.options.style.chat"),
        },
      ],
    },
    {
      value: "cy-GB-AledNeural",
      label: $t("tts.azure.options.speaker.aled"),
      styles: [
        {
          value: "chat",
          label: $t("tts.azure.options.style.chat"),
        },
      ],
    },
  ],
}));
