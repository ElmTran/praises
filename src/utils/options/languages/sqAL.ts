import type { LanguageOption } from "../../constants";
import { $t } from "../../../locales";
import { computed, type ComputedRef } from "vue";

export const sqAL: ComputedRef<LanguageOption> = computed(() => ({
  value: "sq-AL",
  label: $t("tts.azure.options.language.sq_AL"),
  speakers: [
    {
      value: "sq-AL-AnilaNeural",
      label: $t("tts.azure.options.speaker.anila"),
      styles: [
        {
          value: "default",
          label: $t("tts.azure.options.style.default"),
        },
      ],
    },
    {
      value: "sq-AL-IlirNeural",
      label: $t("tts.azure.options.speaker.ilir"),
      styles: [
        {
          value: "default",
          label: $t("tts.azure.options.style.default"),
        },
      ],
    },
  ],
}));
