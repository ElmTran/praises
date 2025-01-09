// km-KH file created
import type { LanguageOption } from "../../constants";
import { $t } from "../../../locales";

export const kmKH: LanguageOption = {
  value: "km-KH",
  label: $t("tts.azure.options.language.km_KH"),
  speakers: [
    {
      value: "km-KH-SreymomNeural",
      label: $t("tts.azure.options.speaker.sreymom"),
      styles: [
        {
          value: "default",
          label: $t("tts.azure.options.style.default"),
        },
      ],
    },
    {
      value: "km-KH-PisethNeural",
      label: $t("tts.azure.options.speaker.piseth"),
      styles: [
        {
          value: "default",
          label: $t("tts.azure.options.style.default"),
        },
      ],
    },
  ],
};
