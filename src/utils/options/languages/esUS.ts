import type { LanguageOption } from "../../constants";
import { $t } from "../../../locales";

export const esUS: LanguageOption = {
  value: "es-US",
  label: $t("tts.azure.options.language.es_US"),
  speakers: [
    {
      value: "es-US-PalomaNeural",
      label: $t("tts.azure.options.speaker.paloma"),
      styles: [
        {
          value: "default",
          label: $t("tts.azure.options.style.default"),
        },
      ],
    },
    {
      value: "es-US-AlonsoNeural",
      label: $t("tts.azure.options.speaker.alonso"),
      styles: [
        {
          value: "default",
          label: $t("tts.azure.options.style.default"),
        },
      ],
    },
  ],
};