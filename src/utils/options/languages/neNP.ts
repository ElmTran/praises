import type { LanguageOption } from "../../constants";
import { $t } from "../../../locales";

export const neNP: LanguageOption = {
  value: "ne-NP",
  label: $t("tts.azure.options.language.ne_NP"),
  speakers: [
    {
      value: "ne-NP-HemkalaNeural",
      label: $t("tts.azure.options.speaker.hemkala"),
      styles: [
        {
          value: "default",
          label: $t("tts.azure.options.style.default"),
        },
      ],
    },
    {
      value: "ne-NP-SagarNeural",
      label: $t("tts.azure.options.speaker.sagar"),
      styles: [
        {
          value: "default",
          label: $t("tts.azure.options.style.default"),
        },
      ],
    },
  ],
};
