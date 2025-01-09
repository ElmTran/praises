import type { LanguageOption } from "../../constants";
import { $t } from "../../../locales";

export const faIR: LanguageOption = {
  value: "fa-IR",
  label: $t("tts.azure.options.language.fa_IR"),
  speakers: [
    {
      value: "fa-IR-DilaraNeural",
      label: $t("tts.azure.options.speaker.dilara"),
      styles: [
        {
          value: "default",
          label: $t("tts.azure.options.style.default"),
        },
      ],
    },
    {
      value: "fa-IR-FaridNeural",
      label: $t("tts.azure.options.speaker.farid"),
      styles: [
        {
          value: "default",
          label: $t("tts.azure.options.style.default"),
        },
      ],
    },
  ],
};
