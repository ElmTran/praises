import type { LanguageOption } from "../../constants";
import { $t } from "../../../locales";

export const urPK: LanguageOption = {
  value: "ur-PK",
  label: $t("tts.azure.options.language.ur_PK"),
  speakers: [
    {
      value: "ur-PK-UzmaNeural",
      label: $t("tts.azure.options.speaker.uzma"),
      styles: [
        {
          value: "default",
          label: $t("tts.azure.options.style.default"),
        },
      ],
    },
    {
      value: "ur-PK-AsadNeural",
      label: $t("tts.azure.options.speaker.asad"),
      styles: [
        {
          value: "default",
          label: $t("tts.azure.options.style.default"),
        },
      ],
    },
  ],
};
