import type { LanguageOption } from "../../constants";
import { $t } from "../../../locales";

export const nlBE: LanguageOption = {
  value: "nl-BE",
  label: $t("tts.azure.options.language.nl_BE"),
  speakers: [
    {
      value: "nl-BE-DenaNeural",
      label: $t("tts.azure.options.speaker.dena"),
      styles: [
        {
          value: "default",
          label: $t("tts.azure.options.style.default"),
        },
      ],
    },
    {
      value: "nl-BE-ArnaudNeural",
      label: $t("tts.azure.options.speaker.arnaud"),
      styles: [
        {
          value: "default",
          label: $t("tts.azure.options.style.default"),
        },
      ],
    },
  ],
};
