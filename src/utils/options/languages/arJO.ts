import type { LanguageOption } from "../../constants";
import { $t } from "../../../locales";

export const arJO: LanguageOption = {
  value: "ar-JO",
  label: $t("tts.azure.options.language.ar_JO"),
  speakers: [
    {
      value: "ar-JO-SanaNeural",
      label: $t("tts.azure.options.speaker.sana"),
      styles: [
        {
          value: "chat",
          label: $t("tts.azure.options.style.chat"),
        },
      ],
    },
    {
      value: "ar-JO-TaimNeural",
      label: $t("tts.azure.options.speaker.taim"),
      styles: [
        {
          value: "chat",
          label: $t("tts.azure.options.style.chat"),
        },
      ],
    },
  ],
};
