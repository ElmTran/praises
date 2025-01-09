
import type { LanguageOption } from "../../constants";
import { $t } from "../../../locales";

export const etEE: LanguageOption = {
  value: "et-EE",
  label: $t("tts.azure.options.language.et_EE"),
  speakers: [
    {
      value: "et-EE-AnuNeura",
      label: $t("tts.azure.options.speaker.anu"),
      styles: [
        {
          value: "default",
          label: $t("tts.azure.options.style.default"),
        },
      ],
    },
    {
      value: "et-EE-KertNeural",
      label: $t("tts.azure.options.speaker.kert"),
      styles: [
        {
          value: "default",
          label: $t("tts.azure.options.style.default"),
        },
      ],
    },
  ],
};
