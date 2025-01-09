import type { LanguageOption } from "../../constants";
import { $t } from "../../../locales";

export const frCA: LanguageOption = {
  value: "fr-CA",
  label: $t("tts.azure.options.language.fr_CA"),
  speakers: [
    {
      value: "fr-CA-SylvieNeural",
      label: $t("tts.azure.options.speaker.sylvie"),
      styles: [
        {
          value: "default",
          label: $t("tts.azure.options.style.default"),
        },
      ],
    },
    {
      value: "fr-CA-JeanNeural",
      label: $t("tts.azure.options.speaker.jean"),
      styles: [
        {
          value: "default",
          label: $t("tts.azure.options.style.default"),
        },
      ],
    },
    {
      value: "fr-CA-AntoineNeural",
      label: $t("tts.azure.options.speaker.antoine"),
      styles: [
        {
          value: "default",
          label: $t("tts.azure.options.style.default"),
        },
      ],
    },
    {
      value: "fr-CA-ThierryNeural",
      label: $t("tts.azure.options.speaker.thierry"),
      styles: [
        {
          value: "default",
          label: $t("tts.azure.options.style.default"),
        },
      ],
    },
  ],
};
