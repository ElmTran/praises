import type { LanguageOption } from "../../constants";
import { $t } from "../../../locales";

export const esPE: LanguageOption = {
  value: "es-PE",
  label: $t("tts.azure.options.language.es_PE"),
  speakers: [
    {
      value: "es-PE-CamilaNeural",
      label: $t("tts.azure.options.speaker.camila"),
      styles: [
        {
          value: "default",
          label: $t("tts.azure.options.style.default"),
        },
      ],
    },
    {
      value: "es-PE-AlexNeural",
      label: $t("tts.azure.options.speaker.alex"),
      styles: [
        {
          value: "default",
          label: $t("tts.azure.options.style.default"),
        },
      ],
    },
  ],
};
