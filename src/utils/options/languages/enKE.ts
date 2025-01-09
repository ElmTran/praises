import type { LanguageOption } from "../../constants";
import { $t } from "../../../locales";

export const enKE: LanguageOption = {
  value: "en-KE",
  label: $t("tts.azure.options.language.en_KE"),
  speakers: [
    {
      value: "en-KE-AsiliaNeural",
      label: $t("tts.azure.options.speaker.asilia"),
      styles: [
        {
          value: "default",
          label: $t("tts.azure.options.style.default"),
        },
      ],
    },
    {
      value: "en-KE-ChilembaNeural",
      label: $t("tts.azure.options.speaker.chilemba"),
      styles: [
        {
          value: "default",
          label: $t("tts.azure.options.style.default"),
        },
      ],
    },
  ],
};
