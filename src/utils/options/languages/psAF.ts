// ps-AF file created
import type { LanguageOption } from "../../constants";
import { $t } from "../../../locales";
import { computed, type ComputedRef } from "vue";

export const psAF: ComputedRef<LanguageOption> = computed(() => ({
  value: "ps-AF",
  label: $t("tts.azure.options.language.ps_AF"),
  speakers: [
    {
      value: "ps-AF-LatifaNeural",
      label: $t("tts.azure.options.speaker.latifa"),
      styles: [
        {
          value: "default",
          label: $t("tts.azure.options.style.default"),
        }
      ],
    },
    {
      value: "ps-AF-GulNawazNeural",
      label: $t("tts.azure.options.speaker.gulnawaz"),
      styles: [
        {
          value: "default",
          label: $t("tts.azure.options.style.default"),
        }
      ],
    },
  ],
}));
