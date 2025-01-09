import type { LanguageOption } from "../../constants";
import { $t } from "../../../locales";

export const srRS: LanguageOption = {
  value: "sr-RS",
  label: $t("tts.azure.options.language.sr_RS"),
  speakers: [
    {
      value: "sr-RS-SophieNeural",
      label: $t("tts.azure.options.speaker.sophie"),
      styles: [
        {
          value: "default",
          label: $t("tts.azure.options.style.default"),
        },
      ],
    },
    {
      value: "sr-RS-NicholasNeural",
      label: $t("tts.azure.options.speaker.nicholas"),
      styles: [
        {
          value: "default",
          label: $t("tts.azure.options.style.default"),
        },
      ],
    },
  ],
};
