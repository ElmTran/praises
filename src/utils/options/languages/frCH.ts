import type { LanguageOption } from "../../constants";
import { $t } from "../../../locales";
import { computed, type ComputedRef } from "vue";

export const frCH: ComputedRef<LanguageOption> = computed(() => ({
  value: "fr-CH",
  label: $t("tts.azure.options.language.fr_CH"),
  speakers: [
    {
      value: "fr-CH-ArianeNeural",
      label: $t("tts.azure.options.speaker.ariane"),
      styles: [
        {
          value: "default",
          label: $t("tts.azure.options.style.default"),
        },
      ],
    },
    {
      value: "fr-CH-FabriceNeural",
      label: $t("tts.azure.options.speaker.fabrice"),
      styles: [
        {
          value: "default",
          label: $t("tts.azure.options.style.default"),
        },
      ],
    },
  ],
}));
