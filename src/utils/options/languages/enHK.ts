import type { LanguageOption } from "../../constants";
import { $t } from "../../../locales";

export const enHK: LanguageOption = {
  value: "en-HK",
  label: $t("tts.azure.options.language.en_HK"),
  speakers: [
    {
      value: "en-HK-YanNeural",
      label: $t("tts.azure.options.speaker.yan"),
      styles: [
        {
          value: "default",
          label: $t("tts.azure.options.style.default"),
        },
      ],
    },
    {
      value: "en-HK-SamNeural",
      label: $t("tts.azure.options.speaker.sam"),
      styles: [
        {
          value: "default",
          label: $t("tts.azure.options.style.default"),
        },
      ],
    },
  ],
};
