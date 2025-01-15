import type { LanguageOption } from "../../constants";
import { $t } from "../../../locales";
import { computed, type ComputedRef } from "vue";

export const esHN: ComputedRef<LanguageOption> = computed(() => ({
  value: "es-HN",
  label: $t("tts.azure.options.language.es_HN"),
  speakers: [
    {
      value: "es-HN-KarlaNeural",
      label: $t("tts.azure.options.speaker.karla"),
      styles: [
        {
          value: "default",
          label: $t("tts.azure.options.style.default"),
        },
      ],
    },
    {
      value: "es-HN-CarlosNeural",
      label: $t("tts.azure.options.speaker.carlos"),
      styles: [
        {
          value: "default",
          label: $t("tts.azure.options.style.default"),
        },
      ],
    },
  ],
}));
