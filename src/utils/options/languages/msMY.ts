import type { LanguageOption } from "../../constants";
import { $t } from "../../../locales";
import { computed, type ComputedRef } from "vue";

export const msMY: ComputedRef<LanguageOption> = computed(() => ({
  value: "ms-MY",
  label: $t("tts.azure.options.language.ms_MY"),
  speakers: [
    {
      value: "ms-MY-YasminNeural",
      label: $t("tts.azure.options.speaker.yasmin"),
      styles: [
        {
          value: "default",
          label: $t("tts.azure.options.style.default"),
        },
      ],
    },
    {
      value: "ms-MY-OsmanNeural",
      label: $t("tts.azure.options.speaker.osman"),
      styles: [
        {
          value: "default",
          label: $t("tts.azure.options.style.default"),
        },
      ],
    },
  ],
}));
