import type { LanguageOption } from "../../constants";
import { $t } from "../../../locales";
import { computed, type ComputedRef } from "vue";

export const heIL: ComputedRef<LanguageOption> = computed(() => ({
  value: "he-IL",
  label: $t("tts.azure.options.language.he_IL"),
  speakers: [
    {
      value: "he-IL-HilaNeural",
      label: $t("tts.azure.options.speaker.hila"),
      styles: [
        {
          value: "default",
          label: $t("tts.azure.options.style.default"),
        },
      ],
    },
    {
      value: "he-IL-AvriNeural",
      label: $t("tts.azure.options.speaker.avri"),
      styles: [
        {
          value: "default",
          label: $t("tts.azure.options.style.default"),
        },
      ],
    },
  ],
}));
