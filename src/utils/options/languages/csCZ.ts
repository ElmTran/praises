import type { LanguageOption } from "../../constants";
import { $t } from "../../../locales";

export const csCZ: LanguageOption = {
  value: "cs-CZ",
  label: $t("tts.azure.options.language.cs_CZ"),
  speakers: [
    {
      value: "cs-CZ-AntoninNeural",
      label: $t("tts.azure.options.speaker.antonin"),
      styles: [
        {
          value: "chat",
          label: $t("tts.azure.options.style.chat"),
        },
      ],
    },
    {
      value: "cs-CZ-VlastaNeural",
      label: $t("tts.azure.options.speaker.vlasta"),
      styles: [
        {
          value: "chat",
          label: $t("tts.azure.options.style.chat"),
        },
      ],
    },
  ],
};
