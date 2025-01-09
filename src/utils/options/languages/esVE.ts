import type { LanguageOption } from "../../constants";
import { $t } from "../../../locales";

export const esVE: LanguageOption = {
  value: "es-VE",
  label: $t("tts.azure.options.language.es_VE"),
  speakers: [
    {
      value: "es-VE-PaolaNeural",
      label: $t("tts.azure.options.speaker.paola"),
      styles: [
        {
          value: "default",
          label: $t("tts.azure.options.style.default"),
        },
      ],
    },
    {
      value: "es-VE-SebastianNeural",
      label: $t("tts.azure.options.speaker.sebastian"),
      styles: [
        {
          value: "default",
          label: $t("tts.azure.options.style.default"),
        },
      ],
    },
  ],
};
