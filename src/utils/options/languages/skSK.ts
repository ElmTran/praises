// sk-SK file created
import type { LanguageOption } from "../../constants";
import { $t } from "../../../locales";

export const skSK: LanguageOption = {
  value: "sk-SK",
  label: $t("tts.azure.options.language.sk_SK"),
  speakers: [
    {
      value: "sk-SK-ViktoriaNeural",
      label: $t("tts.azure.options.speaker.viktoria"),
      styles: [
        {
          value: "default",
          label: $t("tts.azure.options.style.default"),
        },
      ],
    },
    {
      value: "sk-SK-LukasNeural",
      label: $t("tts.azure.options.speaker.lukas"),
      styles: [
        {
          value: "default",
          label: $t("tts.azure.options.style.default"),
        },
      ],
    },
  ],
};
