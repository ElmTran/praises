import type { LanguageOption } from "../../constants";
import { $t } from "../../../locales";

export const esPR: LanguageOption = {
  value: "es-PR",
  label: $t("tts.azure.options.language.es_PR"),
  speakers: [
    {
      value: "es-PR-KarinaNeural",
      label: $t("tts.azure.options.speaker.karina"),
      styles: [
        {
          value: "default",
          label: $t("tts.azure.options.style.default"),
        },
      ],
    },
    {
      value: "es-PR-ManuelNeural",
      label: $t("tts.azure.options.speaker.manuel"),
      styles: [
        {
          value: "default",
          label: $t("tts.azure.options.style.default"),
        },
      ],
    },
  ],
};
