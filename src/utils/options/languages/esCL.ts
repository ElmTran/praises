import type { LanguageOption } from "../../constants";
import { $t } from "../../../locales";
import { computed, type ComputedRef } from "vue";

export const esCL: ComputedRef<LanguageOption> = computed(() => ({
  value: "es-CL",
  label: $t("tts.azure.options.language.es_CL"),
  speakers: [
    {
      value: "es-CL-PabloNeural",
      label: $t("tts.azure.options.speaker.pablo"),
      styles: [
        {
          value: "default",
          label: $t("tts.azure.options.style.default"),
        },
      ],
    },
    {
      value: "es-CL-IsabellaNeural",
      label: $t("tts.azure.options.speaker.isabella"),
      styles: [
        {
          value: "default",
          label: $t("tts.azure.options.style.default"),
        },
      ],
    },
  ],
}));
