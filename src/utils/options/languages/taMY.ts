import type { LanguageOption } from "../../constants";
import { $t } from "../../../locales";

export const taMY: LanguageOption = {
  value: "ta-MY",
  label: $t("tts.azure.options.language.ta_MY"),
  speakers: [
    {
      value: "ta-MY-KaniNeural",
      label: $t("tts.azure.options.speaker.kani"),
      styles: [
        {
          value: "default",
          label: $t("tts.azure.options.style.default"),
        },
      ],
    },
    {
      value: "ta-MY-SuryaNeural",
      label: $t("tts.azure.options.speaker.surya"),
      styles: [
        {
          value: "default",
          label: $t("tts.azure.options.style.default"),
        },
      ],
    },
  ],
};
