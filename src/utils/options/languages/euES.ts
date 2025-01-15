import type { LanguageOption } from "../../constants";
import { $t } from "../../../locales";
import { computed, type ComputedRef } from "vue";

export const euES: ComputedRef<LanguageOption> = computed(() => ({
  value: "eu-ES",
  label: $t("tts.azure.options.language.eu_ES"),
  speakers: [
    {
      value: "eu-ES-AinhoaNeural",
      label: $t("tts.azure.options.speaker.ainhoa"),
      styles: [
        {
          value: "default",
          label: $t("tts.azure.options.style.default"),
        },
      ],
    },
    {
      value: "eu-ES-AnderNeural",
      label: $t("tts.azure.options.speaker.ander"),
      styles: [
        {
          value: "default",
          label: $t("tts.azure.options.style.default"),
        },
      ],
    },
  ],
}));
