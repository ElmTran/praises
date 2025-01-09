import type { LanguageOption } from "../../constants";
import { $t } from "../../../locales";

export const enIE: LanguageOption = {
  value: "en-IE",
  label: $t("tts.azure.options.language.en_IE"),
  speakers: [
    {
      value: "en-IE-EmilyNeural",
      label: $t("tts.azure.options.speaker.emily"),
      styles: [
        {
          value: "default",
          label: $t("tts.azure.options.style.default"),
        },
      ],
    },
    {
      value: "en-IE-ConnorNeural",
      label: $t("tts.azure.options.speaker.connor"),
      styles: [
        {
          value: "default",
          label: $t("tts.azure.options.style.default"),
        },
      ],
    },
  ],
};
