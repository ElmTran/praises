import type { LanguageOption } from "../../constants";
import { $t } from "../../../locales";

export const arSY: LanguageOption = {
  value: "ar-SY",
  label: $t("tts.azure.options.language.ar_SY"),
  speakers: [
    {
      value: "ar-SY-AmanyNeural",
      label: $t("tts.azure.options.speaker.amany"),
      styles: [
        {
          value: "chat",
          label: $t("tts.azure.options.style.chat"),
        },
      ],
    },
    {
      value: "ar-SY-LaithNeural",
      label: $t("tts.azure.options.speaker.laith"),
      styles: [
        {
          value: "chat",
          label: $t("tts.azure.options.style.chat"),
        },
      ],
    },
  ],
};
