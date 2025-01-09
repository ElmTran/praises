import type { LanguageOption } from "../../constants";
import { $t } from "../../../locales";

export const enNZ: LanguageOption = {
  value: "en-NZ",
  label: $t("tts.azure.options.language.en_NZ"),
  speakers: [
    {
      value: "en-NZ-KiriNeural",
      label: $t("tts.azure.options.speaker.kiri"),
      styles: [
        {
          value: "default",
          label: $t("tts.azure.options.style.default"),
        },
      ],
    },
    {
      value: "en-NZ-JamesNeural",
      label: $t("tts.azure.options.speaker.james"),
      styles: [
        {
          value: "default",
          label: $t("tts.azure.options.style.default"),
        },
      ],
    },
  ],
};
