import type { LanguageOption } from "../../constants";
import { $t } from "../../../locales";
import { computed, type ComputedRef } from "vue";

export const bnIN: ComputedRef<LanguageOption> = computed(() => ({
  value: "bn-IN",
  label: $t("tts.azure.options.language.bn_IN"),
  speakers: [
    {
      value: "bn-IN-TanishaaNeural",
      label: $t("tts.azure.options.speaker.tanishaa"),
      styles: [
        {
          value: "chat",
          label: $t("tts.azure.options.style.chat"),
        },
      ],
    },
    {
      value: "bn-IN-BashkarNeural",
      label: $t("tts.azure.options.speaker.bashkar"),
      styles: [
        {
          value: "chat",
          label: $t("tts.azure.options.style.chat"),
        },
      ],
    },
  ],
}));
