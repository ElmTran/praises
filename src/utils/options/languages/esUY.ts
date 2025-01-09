// es-UY file created
import type { LanguageOption } from "../../constants";
import { $t } from "../../../locales";

export const esUY: LanguageOption = {
  value: "es-UY",
  label: $t("tts.azure.options.language.es_UY"),
  speakers: [
    {
      value: "es-UY-ValentinaNeural",
      label: $t("tts.azure.options.speaker.valentina"),
      styles: [
        {
          value: "default",
          label: $t("tts.azure.options.style.default"),
        },
      ],
    },
    {
      value: "es-UY-MateoNeural",
      label: $t("tts.azure.options.speaker.mateo"),
      styles: [
        {
          value: "default",
          label: $t("tts.azure.options.style.default"),
        },
      ],
    },
  ],
};
