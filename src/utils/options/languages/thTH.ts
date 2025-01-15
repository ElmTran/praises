// th-TH file created
import type { LanguageOption } from "../../constants";
import { $t } from "../../../locales";
import { computed, type ComputedRef } from "vue";

export const thTH: ComputedRef<LanguageOption> = computed(() => ({
  value: "th-TH",
  label: $t("tts.azure.options.language.th_TH"),
  speakers: [
    {
      value: "th-TH-PremwadeeNeural",
      label: $t("tts.azure.options.speaker.premwadee"),
      styles: [
        {
          value: "default",
          label: $t("tts.azure.options.style.default"),
        },
      ],
    },
    {
      value: "th-TH-NiwatNeural",
      label: $t("tts.azure.options.speaker.niwat"),
      styles: [
        {
          value: "default",
          label: $t("tts.azure.options.style.default"),
        },
      ],
    },
    {
      value: "th-TH-AcharaNeural",
      label: $t("tts.azure.options.speaker.achara"),
      styles: [
        {
          value: "default",
          label: $t("tts.azure.options.style.default"),
        },
      ],
    },
  ],
}));
