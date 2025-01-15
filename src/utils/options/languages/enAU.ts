import type { LanguageOption } from "../../constants";
import { $t } from "../../../locales";
import { computed, type ComputedRef } from "vue";

export const enAU: ComputedRef<LanguageOption> = computed(() => ({
  value: "en-AU",
  label: $t("tts.azure.options.language.en_AU"),
  speakers: [
    {
      value: "en-AU-NatashaNeural",
      label: $t("tts.azure.options.speaker.natasha"),
      styles: [
        {
          value: "default",
          label: $t("tts.azure.options.style.default"),
        },
      ],
    },
    {
      value: "en-AU-WilliamNeural",
      label: $t("tts.azure.options.speaker.william"),
      styles: [
        {
          value: "default",
          label: $t("tts.azure.options.style.default"),
        },
      ],
    },
    {
      value: "en-AU-AnnetteNeural",
      label: $t("tts.azure.options.speaker.annette"),
      styles: [
        {
          value: "default",
          label: $t("tts.azure.options.style.default"),
        },
      ],
    },
    {
      value: "en-AU-CarlyNeural",
      label: $t("tts.azure.options.speaker.carly"),
      styles: [
        {
          value: "default",
          label: $t("tts.azure.options.style.default"),
        },
      ],
    },
    {
      value: "en-AU-DarrenNeural",
      label: $t("tts.azure.options.speaker.darren"),
      styles: [
        {
          value: "default",
          label: $t("tts.azure.options.style.default"),
        },
      ],
    },
    {
      value: "en-AU-DuncanNeural",
      label: $t("tts.azure.options.speaker.duncan"),
      styles: [
        {
          value: "default",
          label: $t("tts.azure.options.style.default"),
        },
      ],
    },
    {
      value: "en-AU-ElsieNeural",
      label: $t("tts.azure.options.speaker.elsie"),
      styles: [
        {
          value: "default",
          label: $t("tts.azure.options.style.default"),
        },
      ],
    },
    {
      value: "en-AU-FreyaNeural",
      label: $t("tts.azure.options.speaker.freya"),
      styles: [
        {
          value: "default",
          label: $t("tts.azure.options.style.default"),
        },
      ],
    },
    {
      value: "en-AU-JoanneNeural",
      label: $t("tts.azure.options.speaker.joanne"),
      styles: [
        {
          value: "default",
          label: $t("tts.azure.options.style.default"),
        },
      ],
    },
    {
      value: "en-AU-KenNeural",
      label: $t("tts.azure.options.speaker.ken"),
      styles: [
        {
          value: "default",
          label: $t("tts.azure.options.style.default"),
        },
      ],
    },
    {
      value: "en-AU-KimNeural",
      label: $t("tts.azure.options.speaker.kim"),
      styles: [
        {
          value: "default",
          label: $t("tts.azure.options.style.default"),
        },
      ],
    },
    {
      value: "en-AU-NeilNeural",
      label: $t("tts.azure.options.speaker.neil"),
      styles: [
        {
          value: "default",
          label: $t("tts.azure.options.style.default"),
        },
      ],
    },
    {
      value: "en-AU-TimNeural",
      label: $t("tts.azure.options.speaker.tim"),
      styles: [
        {
          value: "default",
          label: $t("tts.azure.options.style.default"),
        },
      ],
    },
    {
      value: "en-AU-TinaNeural",
      label: $t("tts.azure.options.speaker.tina"),
      styles: [
        {
          value: "default",
          label: $t("tts.azure.options.style.default"),
        },
      ],
    },
  ],
}));
