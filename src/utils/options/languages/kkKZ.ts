import type { LanguageOption } from "../../constants";
import { $t } from "../../../locales";

export const kkKZ: LanguageOption = {
  value: "kk-KZ",
  label: $t("tts.azure.options.language.kk_KZ"),
  speakers: [
    {
      value: "kk-KZ-AigulNeural",
      label: $t("tts.azure.options.speaker.aigul"),
      styles: [
        {
          value: "default",
          label: $t("tts.azure.options.style.default"),
        },
      ],
    },
    {
      value: "kk-KZ-DauletNeural",
      label: $t("tts.azure.options.speaker.daulet"),
      styles: [
        {
          value: "default",
          label: $t("tts.azure.options.style.default"),
        },
      ],
    },
  ],
};
