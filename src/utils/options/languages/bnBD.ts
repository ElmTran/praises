import type { LanguageOption } from "../../constants";
import { $t } from "../../../locales";

export const bnBD: LanguageOption = {
  value: "bn-BD",
  label: $t("tts.azure.options.language.bn_BD"),
  speakers: [
    {
      value: "bn-BD-NabanitaNeural",
      label: $t("tts.azure.options.speaker.nabanita"),
      styles: [
        {
          value: "chat",
          label: $t("tts.azure.options.style.chat"),
        },
      ],
    },
    {
      value: "bn-BD-PradeepNeural",
      label: $t("tts.azure.options.speaker.pradeep"),
      styles: [
        {
          value: "chat",
          label: $t("tts.azure.options.style.chat"),
        },
      ],
    },
  ],
};
