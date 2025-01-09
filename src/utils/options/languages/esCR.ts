import type { LanguageOption } from "../../constants";
import { $t } from "../../../locales";

export const esCR: LanguageOption = {
  value: "es-CR",
  label: $t("tts.azure.options.language.es_CR"),
  speakers: [
    {
      value: "es-CR-JuanNeural",
      label: $t("tts.azure.options.speaker.juan"),
      styles: [
        {
          value: "default",
          label: $t("tts.azure.options.style.default"),
        },
      ],
    },
    {
      value: "es-CR-MariaNeural",
      label: $t("tts.azure.options.speaker.maria"),
      styles: [
        {
          value: "default",
          label: $t("tts.azure.options.style.default"),
        },
      ],
    },
  ],
};
