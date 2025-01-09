// nl-NL file created
import type { LanguageOption } from "../../constants";
import { $t } from "../../../locales";

export const nlNL: LanguageOption = {
  value: "nl-NL",
  label: $t("tts.azure.options.language.nl_NL"),
  speakers: [
    {
      value: "nl-NL-MaartenNeural",
      label: $t("tts.azure.options.speaker.maarten"),
      styles: [
        {
          value: "default",
          label: $t("tts.azure.options.style.default"),
        }
      ],
    },
    {
      value: "nl-NL-SophieNeural",
      label: $t("tts.azure.options.speaker.sophie"),
      styles: [
        {
          value: "default",
          label: $t("tts.azure.options.style.default"),
        }
      ],
    },
  ],
};
