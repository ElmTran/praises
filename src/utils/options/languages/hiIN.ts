import type { LanguageOption } from "../../constants";
import { $t } from "../../../locales";
import { computed, type ComputedRef } from "vue";

export const hiIN: ComputedRef<LanguageOption> = computed(() => ({
  value: "hi-IN",
  label: $t("tts.azure.options.language.hi_IN"),
  speakers: [
    {
      value: "hi-IN-AaravNeural",
      label: $t("tts.azure.options.speaker.aarav"),
      styles: [
        {
          value: "default",
          label: $t("tts.azure.options.style.default"),
        },
      ],
    },
    {
      value: "hi-IN-AnanyaNeural",
      label: $t("tts.azure.options.speaker.ananya"),
      styles: [
        {
          value: "default",
          label: $t("tts.azure.options.style.default"),
        },
      ],
    },
    {
      value: "hi-IN-KavyaNeural",
      label: $t("tts.azure.options.speaker.kavya"),
      styles: [
        {
          value: "default",
          label: $t("tts.azure.options.style.default"),
        },
      ],
    },
    {
      value: "hi-IN-KunalNeural",
      label: $t("tts.azure.options.speaker.kunal"),
      styles: [
        {
          value: "default",
          label: $t("tts.azure.options.style.default"),
        },
      ],
    },
    {
      value: "hi-IN-RehaanNeural",
      label: $t("tts.azure.options.speaker.rehaan"),
      styles: [
        {
          value: "default",
          label: $t("tts.azure.options.style.default"),
        },
      ],
    },
    {
      value: "hi-IN-SwaraNeural",
      label: $t("tts.azure.options.speaker.swara"),
      styles: [
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
      value: "hi-IN-MadhurNeural",
      label: $t("tts.azure.options.speaker.madhur"),
      styles: [
        {
          value: "default",
          label: $t("tts.azure.options.style.default"),
        },
      ],
    },
  ],
}));
