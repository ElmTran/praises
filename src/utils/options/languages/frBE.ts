import type { LanguageOption } from "../../constants";
import { $t } from "../../../locales";
import { computed, type ComputedRef } from "vue";

export const frBE: ComputedRef<LanguageOption> = computed(() => ({
  value: "fr-BE",
  label: $t("tts.azure.options.language.fr_BE"),
  speakers: [
    {
      value: "fr-BE-CharlineNeural",
      label: $t("tts.azure.options.speaker.charline"),
      styles: [
        {
          value: "default",
          label: $t("tts.azure.options.style.default"),
        },
      ],
    },
    {
      value: "fr-BE-GerardNeural",
      label: $t("tts.azure.options.speaker.gerard"),
      styles: [
        {
          value: "default",
          label: $t("tts.azure.options.style.default"),
        },
      ],
    },
  ],
}));
