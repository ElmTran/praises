import type { LanguageOption } from "../../constants";
import { $t } from "../../../locales";

export const enZA: LanguageOption = {
  value: "en-ZA",
  label: $t("tts.azure.options.language.en_ZA"),
  speakers: [
    {
      value: "en-ZA-AdriNeural",
      label: $t("tts.azure.options.speaker.adri"),
      styles: [
        {
          value: "default",
          label: $t("tts.azure.options.style.default"),
        },
      ],
    },
    {
      value: "en-ZA-WillemNeural",
      label: $t("tts.azure.options.speaker.willem"),
      styles: [
        {
          value: "default",
          label: $t("tts.azure.options.style.default"),
        },
      ],
    },
  ],
};
