import type { LanguageOption } from "../../constants";
import { $t } from "../../../locales";

export const roRO: LanguageOption = {
  value: "ro-RO",
  label: $t("tts.azure.options.language.ro_RO"),
  speakers: [
    {
      value: "ro-RO-AlinaNeural",
      label: $t("tts.azure.options.speaker.alina"),
      styles: [
        {
          value: "default",
          label: $t("tts.azure.options.style.default"),
        }
      ],
    },
    {
      value: "ro-RO-EmilNeural",
      label: $t("tts.azure.options.speaker.emil"),
      styles: [
        {
          value: "default",
          label: $t("tts.azure.options.style.default"),
        }
      ],
    },
  ],
};
