import type { LanguageOption } from "../../constants";
import { $t } from "../../../locales";

export const esAR: LanguageOption = {
  value: "es-AR",
  label: $t("tts.azure.options.language.es_AR"),
  speakers: [
    {
      value: "es-AR-ElenaNeural",
      label: $t("tts.azure.options.speaker.elena"),
      styles: [
        {
          value: "default",
          label: $t("tts.azure.options.style.default"),
        },
      ],
    },
    {
      value: "es-AR-TomasNeural",
      label: $t("tts.azure.options.speaker.tomas"),
      styles: [
        {
          value: "default",
          label: $t("tts.azure.options.style.default"),
        },
      ],
    },
  ],
};
