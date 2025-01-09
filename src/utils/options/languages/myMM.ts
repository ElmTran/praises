// my-MM file created

import type { LanguageOption } from "../../constants";
import { $t } from "../../../locales";

export const myMM: LanguageOption = {
  value: "my-MM",
  label: $t("tts.azure.options.language.my_MM"),
  speakers: [
    {
      value: "my-MM-NilarNeural",
      label: $t("tts.azure.options.speaker.nilar"),
      styles: [
        {
          value: "default",
          label: $t("tts.azure.options.style.default"),
        },
      ],
    },
    {
      value: "my-MM-ThihaNeural",
      label: $t("tts.azure.options.speaker.thiha"),
      styles: [
        {
          value: "default",
          label: $t("tts.azure.options.style.default"),
        },
      ],
    },
  ],
};
