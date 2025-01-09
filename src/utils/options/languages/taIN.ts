import type { LanguageOption } from "../../constants";
import { $t } from "../../../locales";

export const taIN: LanguageOption = {
  value: "ta-IN",
  label: $t("tts.azure.options.language.ta_IN"),
  speakers: [
    {
      value: "ta-IN-PallaviNeural",
      label: $t("tts.azure.options.speaker.pallavi"),
      styles: [
        {
          value: "default",
          label: $t("tts.azure.options.style.default"),
        },
      ],
    },
    {
      value: "ta-IN-ValluvarNeural",
      label: $t("tts.azure.options.speaker.valluvar"),
      styles: [
        {
          value: "default",
          label: $t("tts.azure.options.style.default"),
        },
      ],
    },
  ],
};
