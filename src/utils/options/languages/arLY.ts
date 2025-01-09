import type { LanguageOption } from "../../constants";
import { $t } from "../../../locales";

export const arLY: LanguageOption = {
  value: "ar-LY",
  label: $t("tts.azure.options.language.ar_LY"),
  speakers: [
    {
      value: "ar-LY-ImanNeural",
      label: $t("tts.azure.options.speaker.iman"),
      styles: [
        {
          value: "chat",
          label: $t("tts.azure.options.style.chat"),
        },
      ],
    },
    {
      value: "ar-LY-OmarNeural",
      label: $t("tts.azure.options.speaker.omar"),
      styles: [
        {
          value: "chat",
          label: $t("tts.azure.options.style.chat"),
        },
      ],
    },
  ],
};
