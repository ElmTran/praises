import type { LanguageOption } from "../../constants";
import { $t } from "../../../locales";
import { computed, type ComputedRef } from "vue";

export const daDK: ComputedRef<LanguageOption> = computed(() => ({
  value: "da-DK",
  label: $t("tts.azure.options.language.da_DK"),
  speakers: [
    {
      value: "da-DK-ChristelNeural",
      label: $t("tts.azure.options.speaker.christel"),
      styles: [
        {
          value: "default",
          label: $t("tts.azure.options.style.default"),
        },
      ],
    },
    {
      value: "da-DK-JeppeNeural",
      label: $t("tts.azure.options.speaker.jeppe"),
      styles: [
        {
          value: "default",
          label: $t("tts.azure.options.style.default"),
        },
      ],
    },
  ],
}));
