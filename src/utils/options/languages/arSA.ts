import type { LanguageOption } from "../../constants";
import { $t } from "../../../locales";

export const arSA: LanguageOption = {
  value: "ar-SA",
  label: $t("tts.azure.options.language.ar_SA"),
  speakers: [
    {
      value: "ar-SA-ZariyahNeural",
      label: $t("tts.azure.options.speaker.zariyah"),
      styles: [
        {
          value: "chat",
          label: $t("tts.azure.options.style.chat"),
        },
      ],
    },
    {
      value: "ar-SA-HamedNeural",
      label: $t("tts.azure.options.speaker.hamed"),
      styles: [
        {
          value: "chat",
          label: $t("tts.azure.options.style.chat"),
        },
      ],
    },
  ],
};
