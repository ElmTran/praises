import type { LanguageOption } from "../../constants";
import { $t } from "../../../locales";
import { computed, type ComputedRef } from "vue";

export const trTR: ComputedRef<LanguageOption> = computed(() => ({
  value: "tr-TR",
  label: $t("tts.azure.options.language.tr_TR"),
  speakers: [
    {
      value: "tr-TR-EmelNeural",
      label: $t("tts.azure.options.speaker.emel"),
      styles: [
        {
          value: "default",
          label: $t("tts.azure.options.style.default"),
        },
      ],
    },
    {
      value: "tr-TR-AhmetNeural",
      label: $t("tts.azure.options.speaker.ahmet"),
      styles: [
        {
          value: "default",
          label: $t("tts.azure.options.style.default"),
        },
      ],
    },
  ],
}));
