import type { LanguageOption } from "../../constants";
import { $t } from "../../../locales";

export const loLA: LanguageOption = {
  value: "lo-LA",
  label: $t("tts.azure.options.language.lo_LA"),
  speakers: [
    {
      value: "lo-LA-KeomanyNeural",
      label: $t("tts.azure.options.speaker.keomany"),
      styles: [
        {
          value: "default",
          label: $t("tts.azure.options.style.default"),
        },
      ],
    },
    {
      value: "lo-LA-ChanthavongNeural",
      label: $t("tts.azure.options.speaker.chanthavong"),
      styles: [
        {
          value: "default",
          label: $t("tts.azure.options.style.default"),
        },
      ],
    },
  ],
};
