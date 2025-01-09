import type { LanguageOption } from "../../constants";
import { $t } from "../../../locales";

export const enNG: LanguageOption = {
  value: "en-NG",
  label: $t("tts.azure.options.language.en_NG"),
  speakers: [
    {
      value: "en-NG-EzinneNeural",
      label: $t("tts.azure.options.speaker.ezinne"),
      styles: [
        {
          value: "default",
          label: $t("tts.azure.options.style.default"),
        },
      ],
    },
    {
      value: "en-NG-AbeoNeural",
      label: $t("tts.azure.options.speaker.aboe"),
      styles: [
        {
          value: "default",
          label: $t("tts.azure.options.style.default"),
        },
      ],
    },
  ],
};
