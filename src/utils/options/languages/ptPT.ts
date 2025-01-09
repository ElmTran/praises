import type { LanguageOption } from "../../constants";
import { $t } from "../../../locales";

export const ptPT: LanguageOption = {
  value: "pt-PT",
  label: $t("tts.azure.options.language.pt_PT"),
  speakers: [
    {
      value: "pt-PT-RaquelNeural",
      label: $t("tts.azure.options.speaker.raquel"),
      styles: [
        {
          value: "default",
          label: $t("tts.azure.options.style.default"),
        },
        {
          value: "sad",
          label: $t("tts.azure.options.style.sad"),
        },
        {
          value: "whispering",
          label: $t("tts.azure.options.style.whispering"),
        }
      ],
    },
    {
      value: "pt-PT-DuarteNeural",
      label: $t("tts.azure.options.speaker.duarte"),
      styles: [
        {
          value: "default",
          label: $t("tts.azure.options.style.default"),
        }
      ],
    },
    {
      value: "pt-PT-FernandaNeural",
      label: $t("tts.azure.options.speaker.fernanda"),
      styles: [
        {
          value: "default",
          label: $t("tts.azure.options.style.default"),
        }
      ],
    },
  ],
};
