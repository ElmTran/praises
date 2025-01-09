import type { LanguageOption } from "../../constants";
import { $t } from "../../../locales";

export const bgBG: LanguageOption = {
  value: "bg-BG",
  label: $t("tts.azure.options.language.bg_BG"),
  speakers: [
    {
      value: "bg-BG-KalinaNeural",
      label: $t("tts.azure.options.speaker.kalina"),
      styles: [
        {
          value: "chat",
          label: $t("tts.azure.options.style.chat"),
        },
      ],
    },
    {
      value: "bg-BG-BorislavNeural",
      label: $t("tts.azure.options.speaker.borislav"),
      styles: [
        {
          value: "chat",
          label: $t("tts.azure.options.style.chat"),
        },
      ],
    },
  ],
};
