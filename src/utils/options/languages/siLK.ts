// si-LK file created
import type { LanguageOption } from "../../constants";
import { $t } from "../../../locales";

export const siLK: LanguageOption = {
  value: "si-LK",
  label: $t("tts.azure.options.language.si_LK"),
  speakers: [
    {
      value: "si-LK-ThiliniNeural",
      label: $t("tts.azure.options.speaker.thilini"),
      styles: [
        {
          value: "default",
          label: $t("tts.azure.options.style.default"),
        },
      ],
    },
    {
      value: "si-LK-SameeraNeural",
      label: $t("tts.azure.options.speaker.sameera"),
      styles: [
        {
          value: "default",
          label: $t("tts.azure.options.style.default"),
        },
      ],
    },
  ],
};
