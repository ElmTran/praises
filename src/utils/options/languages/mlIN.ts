import type { LanguageOption } from "../../constants";
import { $t } from "../../../locales";

export const mlIN: LanguageOption = {
  value: "ml-IN",
  label: $t("tts.azure.options.language.ml_IN"),
  speakers: [
    {
      value: "ml-IN-SobhanaNeural",
      label: $t("tts.azure.options.speaker.sobhana"),
      styles: [
        {
          value: "default",
          label: $t("tts.azure.options.style.default"),
        },
      ],
    },
    {
      value: "ml-IN-MidhunNeural",
      label: $t("tts.azure.options.speaker.midhun"),
      styles: [
        {
          value: "default",
          label: $t("tts.azure.options.style.default"),
        },
      ],
    },
  ],
};
