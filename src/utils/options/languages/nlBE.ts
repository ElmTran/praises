import type { LanguageOption } from "../../constants";
import { $t } from "../../../locales";
import { computed, type ComputedRef } from "vue";

export const nlBE: ComputedRef<LanguageOption> = computed(() => ({
  value: "nl-BE",
  label: $t("tts.azure.options.language.nl_BE"),
  speakers: [
    {
      value: "nl-BE-DenaNeural",
      label: $t("tts.azure.options.speaker.dena"),
      styles: [
        {
          value: "default",
          label: $t("tts.azure.options.style.default"),
        },
      ],
    },
    {
      value: "nl-BE-ArnaudNeural",
      label: $t("tts.azure.options.speaker.arnaud"),
      styles: [
        {
          value: "default",
          label: $t("tts.azure.options.style.default"),
        },
      ],
    },
  ],
}));
