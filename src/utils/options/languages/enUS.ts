import type { LanguageOption } from "../../constants";
import { $t } from "../../../locales";
import { computed, type ComputedRef } from "vue";

export const enUS: ComputedRef<LanguageOption> = computed(() => ({
  value: "en-US",
  label: $t("tts.azure.options.language.en_US"),
  speakers: [
    {
      value: "en-US-AndrewMultilingualNeural",
      label: $t("tts.azure.options.speaker.andrew"),
      styles: [
        {
          value: "empathetic",
          label: $t("tts.azure.options.style.empathetic"),
        },
        {
          value: "relieved",
          label: $t("tts.azure.options.style.relieved"),
        },
      ],
    },
    {
      value: "en-US-AriaNeural",
      label: $t("tts.azure.options.speaker.aria"),
      styles: [
        {
          value: "angry",
          label: $t("tts.azure.options.style.angry"),
        },
        {
          value: "chat",
          label: $t("tts.azure.options.style.chat"),
        },
        {
          value: "cheerful",
          label: $t("tts.azure.options.style.cheerful"),
        },
        {
          value: "customerservice",
          label: $t("tts.azure.options.style.customerservice"),
        },
        {
          value: "empathetic",
          label: $t("tts.azure.options.style.empathetic"),
        },
        {
          value: "excited",
          label: $t("tts.azure.options.style.excited"),
        },
        {
          value: "friendly",
          label: $t("tts.azure.options.style.friendly"),
        },
        {
          value: "hopeful",
          label: $t("tts.azure.options.style.hopeful"),
        },
        {
          value: "narration-professional",
          label: $t("tts.azure.options.style.narration_professional"),
        },
        {
          value: "newscast-casual",
          label: $t("tts.azure.options.style.newscast_casual"),
        },
        {
          value: "newscast-formal",
          label: $t("tts.azure.options.style.newscast_formal"),
        },
        {
          value: "sad",
          label: $t("tts.azure.options.style.sad"),
        },
        {
          value: "shouting",
          label: $t("tts.azure.options.style.shouting"),
        },
        {
          value: "terrified",
          label: $t("tts.azure.options.style.terrified"),
        },
        {
          value: "unfriendly",
          label: $t("tts.azure.options.style.unfriendly"),
        },
        {
          value: "whispering",
          label: $t("tts.azure.options.style.whispering"),
        },
      ],
    },
    {
      value: "en-US-DavisNeural",
      label: $t("tts.azure.options.speaker.davis"),
      styles: [
        {
          value: "angry",
          label: $t("tts.azure.options.style.angry"),
        },
        {
          value: "chat",
          label: $t("tts.azure.options.style.chat"),
        },
        {
          value: "cheerful",
          label: $t("tts.azure.options.style.cheerful"),
        },
        {
          value: "excited",
          label: $t("tts.azure.options.style.excited"),
        },
        {
          value: "friendly",
          label: $t("tts.azure.options.style.friendly"),
        },
        {
          value: "hopeful",
          label: $t("tts.azure.options.style.hopeful"),
        },
        {
          value: "sad",
          label: $t("tts.azure.options.style.sad"),
        },
        {
          value: "shouting",
          label: $t("tts.azure.options.style.shouting"),
        },
        {
          value: "terrified",
          label: $t("tts.azure.options.style.terrified"),
        },
        {
          value: "unfriendly",
          label: $t("tts.azure.options.style.unfriendly"),
        },
        {
          value: "whispering",
          label: $t("tts.azure.options.style.whispering"),
        },
      ],
    },
    {
      value: "en-US-GuyNeural",
      label: $t("tts.azure.options.speaker.guy"),
      styles: [
        {
          value: "angry",
          label: $t("tts.azure.options.style.angry"),
        },
        {
          value: "cheerful",
          label: $t("tts.azure.options.style.cheerful"),
        },
        {
          value: "excited",
          label: $t("tts.azure.options.style.excited"),
        },
        {
          value: "friendly",
          label: $t("tts.azure.options.style.friendly"),
        },
        {
          value: "hopeful",
          label: $t("tts.azure.options.style.hopeful"),
        },
        {
          value: "newscast",
          label: $t("tts.azure.options.style.newscast"),
        },
        {
          value: "sad",
          label: $t("tts.azure.options.style.sad"),
        },
        {
          value: "shouting",
          label: $t("tts.azure.options.style.shouting"),
        },
        {
          value: "terrified",
          label: $t("tts.azure.options.style.terrified"),
        },
        {
          value: "unfriendly",
          label: $t("tts.azure.options.style.unfriendly"),
        },
        {
          value: "whispering",
          label: $t("tts.azure.options.style.whispering"),
        },
      ],
    },
    {
      value: "en-US-JaneNeural",
      label: $t("tts.azure.options.speaker.jane"),
      styles: [
        {
          value: "angry",
          label: $t("tts.azure.options.style.angry"),
        },
        {
          value: "cheerful",
          label: $t("tts.azure.options.style.cheerful"),
        },
        {
          value: "excited",
          label: $t("tts.azure.options.style.excited"),
        },
        {
          value: "friendly",
          label: $t("tts.azure.options.style.friendly"),
        },
        {
          value: "hopeful",
          label: $t("tts.azure.options.style.hopeful"),
        },
        {
          value: "sad",
          label: $t("tts.azure.options.style.sad"),
        },
        {
          value: "shouting",
          label: $t("tts.azure.options.style.shouting"),
        },
        {
          value: "terrified",
          label: $t("tts.azure.options.style.terrified"),
        },
        {
          value: "unfriendly",
          label: $t("tts.azure.options.style.unfriendly"),
        },
        {
          value: "whispering",
          label: $t("tts.azure.options.style.whispering"),
        },
      ],
    },
    {
      value: "en-US-JasonNeural",
      label: $t("tts.azure.options.speaker.jason"),
      styles: [
        {
          value: "angry",
          label: $t("tts.azure.options.style.angry"),
        },
        {
          value: "cheerful",
          label: $t("tts.azure.options.style.cheerful"),
        },
        {
          value: "excited",
          label: $t("tts.azure.options.style.excited"),
        },
        {
          value: "friendly",
          label: $t("tts.azure.options.style.friendly"),
        },
        {
          value: "hopeful",
          label: $t("tts.azure.options.style.hopeful"),
        },
        {
          value: "sad",
          label: $t("tts.azure.options.style.sad"),
        },
        {
          value: "shouting",
          label: $t("tts.azure.options.style.shouting"),
        },
        {
          value: "terrified",
          label: $t("tts.azure.options.style.terrified"),
        },
        {
          value: "unfriendly",
          label: $t("tts.azure.options.style.unfriendly"),
        },
        {
          value: "whispering",
          label: $t("tts.azure.options.style.whispering"),
        },
      ],
    },
    {
      value: "en-US-JennyNeural",
      label: $t("tts.azure.options.speaker.jenny"),
      styles: [
        {
          value: "angry",
          label: $t("tts.azure.options.style.angry"),
        },
        {
          value: "assistant",
          label: $t("tts.azure.options.style.assistant"),
        },
        {
          value: "chat",
          label: $t("tts.azure.options.style.chat"),
        },
        {
          value: "cheerful",
          label: $t("tts.azure.options.style.cheerful"),
        },
        {
          value: "customerservice",
          label: $t("tts.azure.options.style.customerservice"),
        },
        {
          value: "excited",
          label: $t("tts.azure.options.style.excited"),
        },
        {
          value: "friendly",
          label: $t("tts.azure.options.style.friendly"),
        },
        {
          value: "hopeful",
          label: $t("tts.azure.options.style.hopeful"),
        },
        {
          value: "newscast",
          label: $t("tts.azure.options.style.newscast"),
        },
        {
          value: "sad",
          label: $t("tts.azure.options.style.sad"),
        },
        {
          value: "shouting",
          label: $t("tts.azure.options.style.shouting"),
        },
        {
          value: "terrified",
          label: $t("tts.azure.options.style.terrified"),
        },
        {
          value: "unfriendly",
          label: $t("tts.azure.options.style.unfriendly"),
        },
        {
          value: "whispering",
          label: $t("tts.azure.options.style.whispering"),
        },
      ],
    },
    {
      value: "en-US-KaiNeural",
      label: $t("tts.azure.options.speaker.kai"),
      styles: [
        {
          value: "conversation",
          label: $t("tts.azure.options.style.conversation"),
        },
      ],
    },
  ],
}));
