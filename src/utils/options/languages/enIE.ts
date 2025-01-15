import type { LanguageOption } from "../../constants";
import { $t } from "../../../locales";
import { computed, type ComputedRef } from "vue";

export const enIE: ComputedRef<LanguageOption> = computed(() => ({
  value: "en-IE",
  label: $t("tts.azure.options.language.en_IE"),
  speakers: [
    {
      value: "en-IE-EmilyNeural",
      label: $t("tts.azure.options.speaker.emily"),
      styles: [
        {
          value: "default",
          label: $t("tts.azure.options.style.default"),
        },
      ],
    },
    {
      value: "en-IE-ConnorNeural",
      label: $t("tts.azure.options.speaker.connor"),
      styles: [
        {
          value: "default",
          label: $t("tts.azure.options.style.default"),
        },
      ],
    },
  ],
}));
