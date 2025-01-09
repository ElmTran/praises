import type { LanguageOption } from "../../constants";
import { $t } from "../../../locales";

export const filPH: LanguageOption = {
  value: "fil-PH",
  label: $t("tts.azure.options.language.fil_PH"),
  speakers: [
    {
      value: "	fil-PH-BlessicaNeural",
      label: $t("tts.azure.options.speaker.blessica"),
      styles: [
        {
          value: "default",
          label: $t("tts.azure.options.style.default"),
        },
      ],
    },
    {
        value: "fil-PH-AngeloNeural",
        label: $t("tts.azure.options.speaker.angelo"),
        styles: [
            {
            value: "default",
            label: $t("tts.azure.options.style.default"),
            },
        ],
    }
  ],
};
