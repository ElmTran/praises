import type { LanguageOption } from "../../constants";
import { $t } from "../../../locales";

export const esSV: LanguageOption = {
  value: "es-SV",
  label: $t("tts.azure.options.language.es_SV"),
  speakers: [
    {
      value: "es-SV-LorenaNeural",
      label: $t("tts.azure.options.speaker.lorena"),
      styles: [
        {
          value: "default",
          label: $t("tts.azure.options.style.default"),
        },
      ],
    },
    {
      value: "es-SV-RodrigoNeural",
      label: $t("tts.azure.options.speaker.rodrigo"),
      styles: [
        {
          value: "default",
          label: $t("tts.azure.options.style.default"),
        },
      ],
    },
  ],
};
