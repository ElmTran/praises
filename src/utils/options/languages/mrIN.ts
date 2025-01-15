import type { LanguageOption } from "../../constants";
import { $t } from "../../../locales";
import { computed, type ComputedRef } from "vue";

export const mrIN: ComputedRef<LanguageOption> = computed(() => ({
  value: "mr-IN",
  label: $t("tts.azure.options.language.mr_IN"),
  speakers: [
    {
      value: "mr-IN-AarohiNeural",
      label: $t("tts.azure.options.speaker.aarohi"),
      styles: [
        {
          value: "default",
          label: $t("tts.azure.options.style.default"),
        },
      ],
    },
    {
      value: "mr-IN-ManoharNeural",
      label: $t("tts.azure.options.speaker.manohar"),
      styles: [
        {
          value: "default",
          label: $t("tts.azure.options.style.default"),
        },
      ],
    },
  ],
}));
