import type { LanguageOption } from "../../constants";
import { $t } from "../../../locales";
import { computed, type ComputedRef } from "vue";

export const esEC: ComputedRef<LanguageOption> = computed(() => ({
  value: "es-EC",
  label: $t("tts.azure.options.language.es_EC"),
  speakers: [
    {
      value: "es-EC-AndreaNeural",
      label: $t("tts.azure.options.speaker.andrea"),
      styles: [
        {
          value: "default",
          label: $t("tts.azure.options.style.default"),
        },
      ],
    },
    {
      value: "es-EC-LuisNeural",
      label: $t("tts.azure.options.speaker.luis"),
      styles: [
        {
          value: "default",
          label: $t("tts.azure.options.style.default"),
        },
      ],
    },
  ],
}));
