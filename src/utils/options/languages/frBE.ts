import type { LanguageOption } from "../../constants";
import { $t } from "../../../locales";

export const frBE: LanguageOption = {
  value: "fr-BE",
  label: $t("tts.azure.options.language.fr_BE"),
  speakers: [
    {
      value: "fr-BE-CharlineNeural",
      label: $t("tts.azure.options.speaker.charline"),
      styles: [
        {
          value: "default",
          label: $t("tts.azure.options.style.default"),
        },
      ],
    },
    {
      value: "fr-BE-GerardNeural",
      label: $t("tts.azure.options.speaker.gerard"),
      styles: [
        {
          value: "default",
          label: $t("tts.azure.options.style.default"),
        },
      ],
    },
  ],
};
