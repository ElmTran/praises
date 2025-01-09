import type { LanguageOption } from "../../constants";
import { $t } from "../../../locales";

export const knIN: LanguageOption = {
  value: "kn-IN",
  label: $t("tts.azure.options.language.kn_IN"),
  speakers: [
    {
      value: "kn-IN-SapnaNeural",
      label: $t("tts.azure.options.speaker.sapna"),
      styles: [
        {
          value: "default",
          label: $t("tts.azure.options.style.default"),
        },
      ],
    },
    {
      value: "kn-IN-GaganNeural",
      label: $t("tts.azure.options.speaker.gagan"),
      styles: [
        {
          value: "default",
          label: $t("tts.azure.options.style.default"),
        },
      ],
    },
  ],
};
