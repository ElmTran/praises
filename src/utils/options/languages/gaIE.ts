import type { LanguageOption } from "../../constants";
import { $t } from "../../../locales";

export const gaIE: LanguageOption = {
  value: "ga-IE",
  label: $t("tts.azure.options.language.ga_IE"),
  speakers: [
    {
      value: "ga-IE-OrlaNeural",
      label: $t("tts.azure.options.speaker.orla"),
      styles: [
        {
          value: "default",
          label: $t("tts.azure.options.style.default"),
        },
      ],
    },
    {
      value: "ga-IE-ColmNeural",
      label: $t("tts.azure.options.speaker.colm"),
      styles: [
        {
          value: "default",
          label: $t("tts.azure.options.style.default"),
        },
      ],
    },
  ],
};
