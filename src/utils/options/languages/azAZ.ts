import type { LanguageOption } from "../../constants";
import { $t } from "../../../locales";

export const azAZ: LanguageOption = {
  value: "az-AZ",
  label: $t("tts.azure.options.language.az_AZ"),
  speakers: [
    {
      value: "az-AZ-BabekNeural",
      label: $t("tts.azure.options.speaker.babek"),
      styles: [
        {
          value: "chat",
          label: $t("tts.azure.options.style.chat"),
        },
      ],
    },
    {
      value: "az-AZ-BanuNeural",
      label: $t("tts.azure.options.speaker.banu"),
      styles: [
        {
          value: "chat",
          label: $t("tts.azure.options.style.chat"),
        },
      ],
    },
  ],
};
