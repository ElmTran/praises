import type { LanguageOption } from "../../constants";
import { $t } from "../../../locales";
import { computed, type ComputedRef } from "vue";

export const asIN: ComputedRef<LanguageOption> = computed(() => ({
  value: "as-IN",
  label: $t("tts.azure.options.language.as_IN"),
  speakers: [
    {
      value: "as-IN-DipaliNeural",
      label: $t("tts.azure.options.speaker.dipali"),
      styles: [
        {
          value: "chat",
          label: $t("tts.azure.options.style.chat"),
        },
      ],
    },
    {
      value: "as-IN-ManasNeural",
      label: $t("tts.azure.options.speaker.manas"),
      styles: [
        {
          value: "chat",
          label: $t("tts.azure.options.style.chat"),
        },
      ],
    },
  ],
}));
