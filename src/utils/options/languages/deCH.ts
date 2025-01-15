import type { LanguageOption } from "../../constants";
import { $t } from "../../../locales";
import { computed, type ComputedRef } from "vue";

export const deCH: ComputedRef<LanguageOption> = computed(() => ({
  value: "de-CH",
  label: $t("tts.azure.options.language.de_CH"),
  speakers: [
    {
      value: "de-CH-LeniNeural",
      label: $t("tts.azure.options.speaker.leni"),
      styles: [
        {
          value: "default",
          label: $t("tts.azure.options.style.default"),
        },
      ],
    },
    {
      value: "de-CH-JanNeural",
      label: $t("tts.azure.options.speaker.jan"),
      styles: [
        {
          value: "default",
          label: $t("tts.azure.options.style.default"),
        },
      ],
    },
  ],
}));
