import type { LanguageOption } from "../../constants";
import { $t } from "../../../locales";

export const suID: LanguageOption = {
  value: "su-ID",
  label: $t("tts.azure.options.language.su_ID"),
  speakers: [
    {
      value: "su-ID-TutiNeural",
      label: $t("tts.azure.options.speaker.tuti"),
      styles: [
        {
          value: "default",
          label: $t("tts.azure.options.style.default"),
        },
      ],
    },
    {
      value: "su-ID-JajangNeural",
      label: $t("tts.azure.options.speaker.jajang"),
      styles: [
        {
          value: "default",
          label: $t("tts.azure.options.style.default"),
        },
      ],
    },
  ],
};
