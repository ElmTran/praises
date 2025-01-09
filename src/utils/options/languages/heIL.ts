import type { LanguageOption } from "../../constants";
import { $t } from "../../../locales";

export const heIL: LanguageOption = {
  value: "he-IL",
  label: $t("tts.azure.options.language.he_IL"),
  speakers: [
    {
      value: "he-IL-HilaNeural",
      label: $t("tts.azure.options.speaker.hila"),
      styles: [
        {
          value: "default",
          label: $t("tts.azure.options.style.default"),
        },
      ],
    },
    {
      value: "he-IL-AvriNeural",
      label: $t("tts.azure.options.speaker.avri"),
      styles: [
        {
          value: "default",
          label: $t("tts.azure.options.style.default"),
        },
      ],
    },
  ],
};
