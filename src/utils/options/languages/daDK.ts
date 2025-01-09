import type { LanguageOption } from "../../constants";
import { $t } from "../../../locales";

export const daDK: LanguageOption = {
  value: "da-DK",
  label: $t("tts.azure.options.language.da_DK"),
  speakers: [
    {
      value: "da-DK-ChristelNeural",
      label: $t("tts.azure.options.speaker.christel"),
      styles: [
        {
          value: "default",
          label: $t("tts.azure.options.style.default"),
        },
      ],
    },
    {
      value: "da-DK-JeppeNeural",
      label: $t("tts.azure.options.speaker.jeppe"),
      styles: [
        {
          value: "default",
          label: $t("tts.azure.options.style.default"),
        },
      ],
    },
  ],
};
