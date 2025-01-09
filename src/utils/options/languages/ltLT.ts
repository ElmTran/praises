import type { LanguageOption } from "../../constants";
import { $t } from "../../../locales";

export const ltLT: LanguageOption = {
  value: "lt-LT",
  label: $t("tts.azure.options.language.lt_LT"),
  speakers: [
    {
      value: "lt-LT-OnaNeural",
      label: $t("tts.azure.options.speaker.ona"),
      styles: [
        {
          value: "default",
          label: $t("tts.azure.options.style.default"),
        },
      ],
    },
    {
      value: "lt-LT-LeonasNeural",
      label: $t("tts.azure.options.speaker.leonas"),
      styles: [
        {
          value: "default",
          label: $t("tts.azure.options.style.default"),
        },
      ],
    },
  ],
};
