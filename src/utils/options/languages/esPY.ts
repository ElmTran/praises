import type { LanguageOption } from "../../constants";
import { $t } from "../../../locales";

export const esPY: LanguageOption = {
  value: "es-PY",
  label: $t("tts.azure.options.language.es_PY"),
  speakers: [
    {
      value: "es-PY-TaniaNeural",
      label: $t("tts.azure.options.speaker.tania"),
      styles: [
        {
          value: "default",
          label: $t("tts.azure.options.style.default"),
        },
      ],
    },
    {
      value: "es-PY-MarioNeural",
      label: $t("tts.azure.options.speaker.mario"),
      styles: [
        {
          value: "default",
          label: $t("tts.azure.options.style.default"),
        },
      ],
    },
  ],
};