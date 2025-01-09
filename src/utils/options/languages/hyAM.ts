import type { LanguageOption } from "../../constants";
import { $t } from "../../../locales";

export const hyAM: LanguageOption = {
  value: "hy-AM",
  label: $t("tts.azure.options.language.hy_AM"),
  speakers: [
    {
      value: "hy-AM-AnahitNeural",
      label: $t("tts.azure.options.speaker.anahit"),
      styles: [
        {
          value: "default",
          label: $t("tts.azure.options.style.default"),
        },
      ],
    },
    {
      value: "hy-AM-HaykNeural",
      label: $t("tts.azure.options.speaker.hayk"),
      styles: [
        {
          value: "default",
          label: $t("tts.azure.options.style.default"),
        },
      ],
    },
  ],
};