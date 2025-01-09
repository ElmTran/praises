import type { LanguageOption } from "../../constants";
import { $t } from "../../../locales";

export const mtMT: LanguageOption = {
  value: "mt-MT",
  label: $t("tts.azure.options.language.mt_MT"),
  speakers: [
    {
      value: "mt-MT-GraceNeural",
      label: $t("tts.azure.options.speaker.grace"),
      styles: [
        {
          value: "default",
          label: $t("tts.azure.options.style.default"),
        },
      ],
    },
    {
      value: "mt-MT-JosephNeural",
      label: $t("tts.azure.options.speaker.joseph"),
      styles: [
        {
          value: "default",
          label: $t("tts.azure.options.style.default"),
        },
      ],
    },
  ],
};
