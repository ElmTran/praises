import type { LanguageOption } from "../../constants";
import { $t } from "../../../locales";
import { computed, type ComputedRef } from "vue";

export const enGB: ComputedRef<LanguageOption> = computed(() => ({
  value: "en-GB",
  label: $t("tts.azure.options.language.en_GB"),
  speakers: [
    {
      value: "en-GB-SoniaNeural",
      label: $t("tts.azure.options.speaker.sonia"),
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
          value: "sad",
          label: $t("tts.azure.options.style.sad"),
        },
      ],
    },
    {
      value: "en-GB-RyanNeural",
      label: $t("tts.azure.options.speaker.ryan"),
      styles: [
        {
          value: "default",
          label: $t("tts.azure.options.style.default"),
        },
      ],
    },
    {
      value: "en-GB-LibbyNeural",
      label: $t("tts.azure.options.speaker.libby"),
      styles: [
        {
          value: "default",
          label: $t("tts.azure.options.style.default"),
        },
      ],
    },
    {
      value: "en-GB-AbbiNeural",
      label: $t("tts.azure.options.speaker.abbi"),
      styles: [
        {
          value: "default",
          label: $t("tts.azure.options.style.default"),
        },
      ],
    },
    {
      value: "en-GB-AlfieNeural",
      label: $t("tts.azure.options.speaker.alfie"),
      styles: [
        {
          value: "default",
          label: $t("tts.azure.options.style.default"),
        },
      ],
    },
    {
      value: "en-GB-BellaNeural",
      label: $t("tts.azure.options.speaker.bella"),
      styles: [
        {
          value: "default",
          label: $t("tts.azure.options.style.default"),
        },
      ],
    },
    {
      value: "en-GB-ElliotNeural",
      label: $t("tts.azure.options.speaker.elliot"),
      styles: [
        {
          value: "default",
          label: $t("tts.azure.options.style.default"),
        },
      ],
    },
    {
      value: "en-GB-EthanNeural",
      label: $t("tts.azure.options.speaker.ethan"),
      styles: [
        {
          value: "default",
          label: $t("tts.azure.options.style.default"),
        },
      ],
    },
    {
      value: "en-GB-HollieNeural",
      label: $t("tts.azure.options.speaker.hollie"),
      styles: [
        {
          value: "default",
          label: $t("tts.azure.options.style.default"),
        },
      ],
    },
    {
      value: "en-GB-MaisieNeural",
      label: $t("tts.azure.options.speaker.maisie"),
      styles: [
        {
          value: "default",
          label: $t("tts.azure.options.style.default"),
        },
      ],
    },
    {
      value: "en-GB-NoahNeural",
      label: $t("tts.azure.options.speaker.noah"),
      styles: [
        {
          value: "default",
          label: $t("tts.azure.options.style.default"),
        },
      ],
    },
    {
      value: "en-GB-OliverNeural",
      label: $t("tts.azure.options.speaker.oliver"),
      styles: [
        {
          value: "default",
          label: $t("tts.azure.options.style.default"),
        },
      ],
    },
    {
      value: "en-GB-OliviaNeural",
      label: $t("tts.azure.options.speaker.olivia"),
      styles: [
        {
          value: "default",
          label: $t("tts.azure.options.style.default"),
        },
      ],
    },
    {
      value: "en-GB-ThomasNeural",
      label: $t("tts.azure.options.speaker.thomas"),
      styles: [
        {
          value: "default",
          label: $t("tts.azure.options.style.default"),
        },
      ],
    },
  ],
}));
