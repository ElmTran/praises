import type { LanguageOption } from "../../constants";
import { $t } from "../../../locales";

export const deAT: LanguageOption = {
  value: "de-AT",
  label: $t("tts.azure.options.language.de_AT"),
  speakers: [
    {
      value: "de-AT-IngridNeural",
      label: $t("tts.azure.options.speaker.ingrid"),
      styles: [
        {
          value: "default",
          label: $t("tts.azure.options.style.default"),
        },
      ],
    },
    {
      value: "de-AT-JonasNeural",
      label: $t("tts.azure.options.speaker.jonas"),
      styles: [
        {
          value: "default",
          label: $t("tts.azure.options.style.default"),
        },
      ],
    },
  ],
};
