import type { LanguageOption } from "../../constants";
import { $t } from "../../../locales";

export const enCA: LanguageOption = {
  value: "en-CA",
  label: $t("tts.azure.options.language.en_CA"),
  speakers: [
    {
      value: "en-CA-ClaraNeural",
      label: $t("tts.azure.options.speaker.clara"),
      styles: [
        {
          value: "default",
          label: $t("tts.azure.options.style.default"),
        },
      ],
    },
    {
      value: "en-CA-LiamNeural",
      label: $t("tts.azure.options.speaker.liam"),
      styles: [
        {
          value: "default",
          label: $t("tts.azure.options.style.default"),
        },
      ],
    },
    {
      value: "en-CA-AvaNeural",
      label: $t("tts.azure.options.speaker.ava"),
      styles: [
        {
          value: "default",
          label: $t("tts.azure.options.style.default"),
        },
      ],
    },
    {
      value: "en-CA-EthanNeural",
      label: $t("tts.azure.options.speaker.ethan"),
      styles: [
        {
          value: "default",
          label: $t("tts.azure.options.style.default"),
        },
      ],
    },
    {
      value: "en-CA-IsabelleNeural",
      label: $t("tts.azure.options.speaker.isabelle"),
      styles: [
        {
          value: "default",
          label: $t("tts.azure.options.style.default"),
        },
      ],
    },
    {
      value: "en-CA-OliverNeural",
      label: $t("tts.azure.options.speaker.oliver"),
      styles: [
        {
          value: "default",
          label: $t("tts.azure.options.style.default"),
        },
      ],
    },
  ],
};
