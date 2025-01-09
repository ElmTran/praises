import type { LanguageOption } from "../../constants";
import { $t } from "../../../locales";

export const guIN: LanguageOption = {
  value: "gu-IN",
  label: $t("tts.azure.options.language.gu_IN"),
  speakers: [
    {
      value: "gu-IN-DhwaniNeural",
      label: $t("tts.azure.options.speaker.dhwani"),
      styles: [
        {
          value: "default",
          label: $t("tts.azure.options.style.default"),
        },
      ],
    },
    {
      value: "gu-IN-NiranjanNeural ",
      label: $t("tts.azure.options.speaker.niranjan"),
      styles: [
        {
          value: "default",
          label: $t("tts.azure.options.style.default"),
        },
      ],
    },
  ],
};
