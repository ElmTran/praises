import type { LanguageOption } from "../../constants";
import { $t } from "../../../locales";

export const taLK: LanguageOption = {
  value: "ta-LK",
  label: $t("tts.azure.options.language.ta_LK"),
  speakers: [
    {
      value: "ta-LK-SaranyaNeural",
      label: $t("tts.azure.options.speaker.saranya"),
      styles: [
        {
          value: "default",
          label: $t("tts.azure.options.style.default"),
        },
      ],
    },
    {
      value: "ta-LK-KumarNeural",
      label: $t("tts.azure.options.speaker.kumar"),
      styles: [
        {
          value: "default",
          label: $t("tts.azure.options.style.default"),
        },
      ],
    },
  ],
};