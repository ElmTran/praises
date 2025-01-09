import type { LanguageOption } from "../../constants";
import { $t } from "../../../locales";

export const esBO: LanguageOption = {
  value: "es-BO",
  label: $t("tts.azure.options.language.es_BO"),
  speakers: [
    {
      value: "es-BO-JuanNeural",
      label: $t("tts.azure.options.speaker.juan"),
      styles: [
        {
          value: "default",
          label: $t("tts.azure.options.style.default"),
        },
      ],
    },
    {
      value: "es-BO-MariaNeural",
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
