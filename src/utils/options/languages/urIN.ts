import type { LanguageOption } from "../../constants";
import { $t } from "../../../locales";

export const urIN: LanguageOption = {
  value: "ur-IN",
  label: $t("tts.azure.options.language.ur_IN"),
  speakers: [
    {
      value: "ur-IN-GulNeural",
      label: $t("tts.azure.options.speaker.gul"),
      styles: [
        {
          value: "default",
          label: $t("tts.azure.options.style.default"),
        },
      ],
    },
    {
      value: "ur-IN-SalmanNeural",
      label: $t("tts.azure.options.speaker.salman"),
      styles: [
        {
          value: "default",
          label: $t("tts.azure.options.style.default"),
        },
      ],
    },
  ],
};
