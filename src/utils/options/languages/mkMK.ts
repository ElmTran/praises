import type { LanguageOption } from "../../constants";
import { $t } from "../../../locales";

export const mkMK: LanguageOption = {
  value: "mk-MK",
  label: $t("tts.azure.options.language.mk_MK"),
  speakers: [
    {
      value: "mk-MK-MarijaNeural",
      label: $t("tts.azure.options.speaker.marija"),
      styles: [
        {
          value: "default",
          label: $t("tts.azure.options.style.default"),
        },
      ],
    },
    {
      value: "mk-MK-AleksandarNeural",
      label: $t("tts.azure.options.speaker.aleksandar"),
      styles: [
        {
          value: "default",
          label: $t("tts.azure.options.style.default"),
        },
      ],
    },
  ],
};
