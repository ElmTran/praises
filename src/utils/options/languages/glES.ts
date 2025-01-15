import type { LanguageOption } from "../../constants";
import { $t } from "../../../locales";
import { computed, type ComputedRef } from "vue";

export const glES: ComputedRef<LanguageOption> = computed(() => ({
  value: "gl-ES",
  label: $t("tts.azure.options.language.gl_ES"),
  speakers: [
    {
      value: "gl-ES-SabelaNeural",
      label: $t("tts.azure.options.speaker.sabela"),
      styles: [
        {
          value: "default",
          label: $t("tts.azure.options.style.default"),
        },
      ],
    },
    {
      value: "gl-ES-RoiNeural",
      label: $t("tts.azure.options.speaker.roi"),
      styles: [
        {
          value: "default",
          label: $t("tts.azure.options.style.default"),
        },
      ],
    },
  ],
}));
