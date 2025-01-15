// hr-HR file created
import type { LanguageOption } from "../../constants";
import { $t } from "../../../locales";
import { computed, type ComputedRef } from "vue";

export const hrHR: ComputedRef<LanguageOption> = computed(() => ({
  value: "hr-HR",
  label: $t("tts.azure.options.language.hr_HR"),
  speakers: [
    {
      value: "hr-HR-GabrijelaNeural",
      label: $t("tts.azure.options.speaker.gabrijela"),
      styles: [
        {
          value: "default",
          label: $t("tts.azure.options.style.default"),
        },
      ],
    },
    {
      value: "hr-HR-SreckoNeural",
      label: $t("tts.azure.options.speaker.srecko"),
      styles: [
        {
          value: "default",
          label: $t("tts.azure.options.style.default"),
        },
      ],
    },
  ],
}));
