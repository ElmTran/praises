import type { LanguageOption } from "../../constants";
import { $t } from "../../../locales";
import { computed, type ComputedRef } from "vue";

export const fiFI: ComputedRef<LanguageOption> = computed(() => ({
  value: "fi-FI",
  label: $t("tts.azure.options.language.fi_FI"),
  speakers: [
    {
      value: "fi-FI-SelmaNeural",
      label: $t("tts.azure.options.speaker.selma"),
      styles: [
        {
          value: "default",
          label: $t("tts.azure.options.style.default"),
        },
      ],
    },
    {
      value: "fi-FI-HarriNeural",
      label: $t("tts.azure.options.speaker.harri"),
      styles: [
        {
          value: "default",
          label: $t("tts.azure.options.style.default"),
        },
      ],
    },
    {
        value: "fi-FI-NooraNeural ",
        label: $t("tts.azure.options.speaker.noora"),
        styles: [
          {
            value: "default",
            label: $t("tts.azure.options.style.default"),
          },
        ],
    }
  ],
}));
