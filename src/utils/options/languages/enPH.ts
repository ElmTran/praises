import type { LanguageOption } from "../../constants";
import { $t } from "../../../locales";
import { computed, type ComputedRef } from "vue";

export const enPH: ComputedRef<LanguageOption> = computed(() => ({
  value: "en-PH",
  label: $t("tts.azure.options.language.en_PH"),
  speakers: [
    {
      value: "en-PH-JamesNeural",
      label: $t("tts.azure.options.speaker.james"),
      styles: [
        {
          value: "default",
          label: $t("tts.azure.options.style.default"),
        },
      ],
    },
    {
      value: "en-PH-JasmineNeural",
      label: $t("tts.azure.options.speaker.jasmine"),
      styles: [
        {
          value: "default",
          label: $t("tts.azure.options.style.default"),
        },
      ],
    },
  ],
}));
