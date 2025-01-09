import type { LanguageOption } from "../../constants";
import { $t } from "../../../locales";

export const esEC: LanguageOption = {
  value: "es-EC",
  label: $t("tts.azure.options.language.es_EC"),
  speakers: [
    {
      value: "es-EC-AndreaNeural",
      label: $t("tts.azure.options.speaker.andrea"),
      styles: [
        {
          value: "default",
          label: $t("tts.azure.options.style.default"),
        },
      ],
    },
    {
      value: "es-EC-LuisNeural",
      label: $t("tts.azure.options.speaker.luis"),
      styles: [
        {
          value: "default",
          label: $t("tts.azure.options.style.default"),
        },
      ],
    },
  ],
};
