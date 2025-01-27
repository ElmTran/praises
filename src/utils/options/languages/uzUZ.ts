import type { LanguageOption } from "../../constants";
import { $t } from "../../../locales";
import { computed, type ComputedRef } from "vue";

export const uzUZ: ComputedRef<LanguageOption> = computed(() => ({
  value: "uz-UZ",
  label: $t("tts.azure.options.language.uz_UZ"),
  speakers: [
    {
      value: "uz-UZ-MadinaNeural",
      label: $t("tts.azure.options.speaker.madina"),
      styles: [
        {
          value: "default",
          label: $t("tts.azure.options.style.default"),
        },
      ],
    },
    {
      value: "uz-UZ-SardorNeural",
      label: $t("tts.azure.options.speaker.sardor"),
      styles: [
        {
          value: "default",
          label: $t("tts.azure.options.style.default"),
        },
      ],
    },
  ],
}));
