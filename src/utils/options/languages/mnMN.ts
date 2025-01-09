import type { LanguageOption } from "../../constants";
import { $t } from "../../../locales";

export const mnMN: LanguageOption = {
  value: "mn-MN",
  label: $t("tts.azure.options.language.mn_MN"),
  speakers: [
    {
      value: "mn-MN-YesuiNeural",
      label: $t("tts.azure.options.speaker.yesui"),
      styles: [
        {
          value: "default",
          label: $t("tts.azure.options.style.default"),
        },
      ],
    },
    {
      value: "mn-MN-BataaNeural",
      label: $t("tts.azure.options.speaker.bataa"),
      styles: [
        {
          value: "default",
          label: $t("tts.azure.options.style.default"),
        },
      ],
    },
  ],
};
