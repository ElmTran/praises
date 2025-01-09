import type { LanguageOption } from "../../constants";
import { $t } from "../../../locales";

export const viVN: LanguageOption = {
  value: "vi-VN",
  label: $t("tts.azure.options.language.vi_VN"),
  speakers: [
    {
      value: "vi-VN-HoaiMyNeural",
      label: $t("tts.azure.options.speaker.hoaimy"),
      styles: [
        {
          value: "default",
          label: $t("tts.azure.options.style.default"),
        },
      ],
    },
    {
      value: "vi-VN-NamMinhNeural",
      label: $t("tts.azure.options.speaker.namminh"),
      styles: [
        {
          value: "default",
          label: $t("tts.azure.options.style.default"),
        },
      ],
    },
  ],
};
