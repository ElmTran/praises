import type { LanguageOption } from "../../constants";
import { $t } from "../../../locales";

export const caES: LanguageOption = {
  value: "ca-ES",
  label: $t("tts.azure.options.language.ca_ES"),
  speakers: [
    {
      value: "ca-ES-AlbaNeural",
      label: $t("tts.azure.options.speaker.alba"),
      styles: [
        {
          value: "chat",
          label: $t("tts.azure.options.style.chat"),
        },
      ],
    },
    {
      value: "ca-ES-EnricNeural",
      label: $t("tts.azure.options.speaker.enric"),
      styles: [
        {
          value: "chat",
          label: $t("tts.azure.options.style.chat"),
        },
      ],
    },
    {
      value: "ca-ES-JoanaNeural",
      label: $t("tts.azure.options.speaker.joana"),
      styles: [
        {
          value: "chat",
          label: $t("tts.azure.options.style.chat"),
        },
      ],
    },
  ],
};
