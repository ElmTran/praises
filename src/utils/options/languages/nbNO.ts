// nb-NO file created

import type { LanguageOption } from "../../constants";
import { $t } from "../../../locales";
import { computed, type ComputedRef } from "vue";

export const nbNO: ComputedRef<LanguageOption> = computed(() => ({
  value: "nb-NO",
  label: $t("tts.azure.options.language.nb_NO"),
  speakers: [
    {
      value: "nb-NO-PernilleNeural",
      label: $t("tts.azure.options.speaker.pernille"),
      styles: [
        {
          value: "default",
          label: $t("tts.azure.options.style.default"),
        },
      ],
    },
    {
      value: "nb-NO-FinnNeural",
      label: $t("tts.azure.options.speaker.finn"),
      styles: [
        {
          value: "default",
          label: $t("tts.azure.options.style.default"),
        },
      ],
    },
    {
      value: "nb-NO-IselinNeural",
      label: $t("tts.azure.options.speaker.iselin"),
      styles: [
        {
          value: "default",
          label: $t("tts.azure.options.style.default"),
        },
      ],
    },
  ],
}));
