import type { LanguageOption } from "../../constants";
import { $t } from "../../../locales";
import { computed, type ComputedRef } from "vue";

export const deAT: ComputedRef<LanguageOption> = computed(() => ({
  value: "de-AT",
  label: $t("tts.azure.options.language.de_AT"),
  speakers: [
    {
      value: "de-AT-IngridNeural",
      label: $t("tts.azure.options.speaker.ingrid"),
      styles: [
        {
          value: "default",
          label: $t("tts.azure.options.style.default"),
        },
      ],
    },
    {
      value: "de-AT-JonasNeural",
      label: $t("tts.azure.options.speaker.jonas"),
      styles: [
        {
          value: "default",
          label: $t("tts.azure.options.style.default"),
        },
      ],
    },
  ],
}));
