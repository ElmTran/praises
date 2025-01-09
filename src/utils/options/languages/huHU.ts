import type { LanguageOption } from "../../constants";
import { $t } from "../../../locales";

export const huHU: LanguageOption = {
  value: "hu-HU",
  label: $t("tts.azure.options.language.hu_HU"),
  speakers: [
    {
      value: "hu-HU-NoemiNeural",
      label: $t("tts.azure.options.speaker.noemi"),
      styles: [
        {
          value: "default",
          label: $t("tts.azure.options.style.default"),
        },
      ],
    },
    {
      value: "hu-HU-TamasNeural",
      label: $t("tts.azure.options.speaker.tamas"),
      styles: [
        {
          value: "default",
          label: $t("tts.azure.options.style.default"),
        },
      ],
    },
  ],
};

