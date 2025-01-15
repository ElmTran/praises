import type { LanguageOption } from "../../constants";
import { $t } from "../../../locales";
import { computed, type ComputedRef } from "vue";

export const ukUA: ComputedRef<LanguageOption> = computed(() => ({
  value: "uk-UA",
  label: $t("tts.azure.options.language.uk_UA"),
  speakers: [
    {
      value: "uk-UA-PolinaNeural",
      label: $t("tts.azure.options.speaker.polina"),
      styles: [
        {
          value: "default",
          label: $t("tts.azure.options.style.default"),
        },
      ],
    },
    {
      value: "uk-UA-OstapNeural",
      label: $t("tts.azure.options.speaker.ostap"),
      styles: [
        {
          value: "default",
          label: $t("tts.azure.options.style.default"),
        },
      ],
    },
  ],
}));
