import type { LanguageOption } from "../../constants";
import { $t } from "../../../locales";

export const orIN: LanguageOption = {
  value: "or-IN",
  label: $t("tts.azure.options.language.or_IN"),
  speakers: [
    {
      value: "or-IN-SubhasiniNeural",
      label: $t("tts.azure.options.speaker.subhasini"),
      styles: [
        {
          value: "default",
          label: $t("tts.azure.options.style.default"),
        }
      ],
    },
    {
      value: "or-IN-SukantNeural",
      label: $t("tts.azure.options.speaker.sukant"),
      styles: [
        {
          value: "default",
          label: $t("tts.azure.options.style.default"),
        }
      ],
    },
  ],
};
