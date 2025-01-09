import type { LanguageOption } from "../../constants";
import { $t } from "../../../locales";

export const enIN: LanguageOption = {
  value: "en-IN",
  label: $t("tts.azure.options.language.en_IN"),
  speakers: [
    {
      value: "en-IN-NeerjaNeural",
      label: $t("tts.azure.options.speaker.neerja"),
      styles: [
        {
          value: "default",
          label: $t("tts.azure.options.style.default"),
        },
        {
          value: "cheerful",
          label: $t("tts.azure.options.style.cheerful"),
        },
        {
          value: "empathetic",
          label: $t("tts.azure.options.style.empathetic"),
        },
        {
          value: "newscast",
          label: $t("tts.azure.options.style.newscast"),
        },
      ],
    },
    {
      value: "en-IN-PrabhatNeural",
      label: $t("tts.azure.options.speaker.prabhat"),
      styles: [
        {
          value: "default",
          label: $t("tts.azure.options.style.default"),
        },
      ],
    },
    {
      value: "en-IN-AaravNeural",
      label: $t("tts.azure.options.speaker.aarav"),
      styles: [
        {
          value: "default",
          label: $t("tts.azure.options.style.default"),
        },
      ],
    },
    {
      value: "en-IN-AashiNeural",
      label: $t("tts.azure.options.speaker.aashi"),
      styles: [
        {
          value: "default",
          label: $t("tts.azure.options.style.default"),
        },
      ],
    },
    {
      value: "en-IN-AnanyaNeural",
      label: $t("tts.azure.options.speaker.ananya"),
      styles: [
        {
          value: "default",
          label: $t("tts.azure.options.style.default"),
        },
      ],
    },
    {
      value: "en-IN-KavyaNeural",
      label: $t("tts.azure.options.speaker.kavya"),
      styles: [
        {
          value: "default",
          label: $t("tts.azure.options.style.default"),
        },
      ],
    },
    {
      value: "en-IN-KunalNeural",
      label: $t("tts.azure.options.speaker.kunal"),
      styles: [
        {
          value: "default",
          label: $t("tts.azure.options.style.default"),
        },
      ],
    },
    {
      value: "en-IN-RehaanNeural",
      label: $t("tts.azure.options.speaker.rehaan"),
      styles: [
        {
          value: "default",
          label: $t("tts.azure.options.style.default"),
        },
      ],
    },
  ],
};
