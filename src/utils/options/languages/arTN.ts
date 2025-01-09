import type { LanguageOption } from "../../constants";
import { $t } from "../../../locales";

export const arTN: LanguageOption = {
  value: "ar-TN",
  label: $t("tts.azure.options.language.ar_TN"),
  speakers: [
    {
      value: "ar-TN-ReemNeural",
      label: $t("tts.azure.options.speaker.reem"),
      styles: [
        {
          value: "chat",
          label: $t("tts.azure.options.style.chat"),
        },
      ],
    },
    {
      value: "ar-TN-HediNeural",
      label: $t("tts.azure.options.speaker.hedi"),
      styles: [
        {
          value: "chat",
          label: $t("tts.azure.options.style.chat"),
        },
      ],
    },
  ],
};
