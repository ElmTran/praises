import type { LanguageOption } from "../../constants";
import { $t } from "../../../locales";
import { computed, type ComputedRef } from "vue";

export const arKW: ComputedRef<LanguageOption> = computed(() => ({
  value: "ar-KW",
  label: $t("tts.azure.options.language.ar_KW"),
  speakers: [
    {
      value: "ar-KW-NouraNeural",
      label: $t("tts.azure.options.speaker.noura"),
      styles: [
        {
          value: "chat",
          label: $t("tts.azure.options.style.chat"),
        },
      ],
    },
    {
      value: "ar-KW-FahedNeural",
      label: $t("tts.azure.options.speaker.fahed"),
      styles: [
        {
          value: "chat",
          label: $t("tts.azure.options.style.chat"),
        },
      ],
    },
  ],
}));
