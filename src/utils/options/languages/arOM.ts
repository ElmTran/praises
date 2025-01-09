import type { LanguageOption } from "../../constants";
import { $t } from "../../../locales";

export const arOM: LanguageOption = {
  value: "ar-OM",
  label: $t("tts.azure.options.language.ar_OM"),
  speakers: [
    {
      value: "ar-OM-AbdullahNeural",
      label: $t("tts.azure.options.speaker.abdullah"),
      styles: [
        {
          value: "chat",
          label: $t("tts.azure.options.style.chat"),
        },
      ],
    },
    {
      value: "ar-OM-AyshaNeural",
      label: $t("tts.azure.options.speaker.aysha"),
      styles: [
        {
          value: "chat",
          label: $t("tts.azure.options.style.chat"),
        },
      ],
    },
  ],
};
