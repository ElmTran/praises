import type { LanguageOption } from "../../constants";
import { $t } from "../../../locales";
import { computed, type ComputedRef } from "vue";

export const esMX: ComputedRef<LanguageOption> = computed(() => ({
  value: "es-MX",
  label: $t("tts.azure.options.language.es_MX"),
  speakers: [
    {
      value: "es-MX-DaliaNeural",
      label: $t("tts.azure.options.speaker.dalia"),
      styles: [
        {
          value: "cheerful",
          label: $t("tts.azure.options.style.cheerful"),
        },
        {
          value: "sad",
          label: $t("tts.azure.options.style.sad"),
        },
        {
          value: "whispering",
          label: $t("tts.azure.options.style.whispering"),
        },
      ],
    },
    {
      value: "es-MX-JorgeNeural",
      label: $t("tts.azure.options.speaker.jorge"),
      styles: [
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
          value: "sad",
          label: $t("tts.azure.options.style.sad"),
        },
        {
          value: "whispering",
          label: $t("tts.azure.options.style.whispering"),
        },
      ],
    },
    {
      value: "es-MX-BeatrizNeural",
      label: $t("tts.azure.options.speaker.beatriz"),
      styles: [
        {
          value: "chat",
          label: $t("tts.azure.options.style.chat"),
        },
      ],
    },
    {
      value: "es-MX-CandelaNeural",
      label: $t("tts.azure.options.speaker.candela"),
      styles: [
        {
          value: "chat",
          label: $t("tts.azure.options.style.chat"),
        },
      ],
    },
    {
      value: "es-MX-CarlotaNeural",
      label: $t("tts.azure.options.speaker.carlota"),
      styles: [
        {
          value: "chat",
          label: $t("tts.azure.options.style.chat"),
        },
      ],
    },
    {
      value: "es-MX-CecilioNeural",
      label: $t("tts.azure.options.speaker.cecilio"),
      styles: [
        {
          value: "chat",
          label: $t("tts.azure.options.style.chat"),
        },
      ],
    },
    {
      value: "es-MX-GerardoNeural",
      label: $t("tts.azure.options.speaker.gerardo"),
      styles: [
        {
          value: "chat",
          label: $t("tts.azure.options.style.chat"),
        },
      ],
    },
    {
      value: "es-MX-LarissaNeural",
      label: $t("tts.azure.options.speaker.larissa"),
      styles: [
        {
          value: "chat",
          label: $t("tts.azure.options.style.chat"),
        },
      ],
    },
    {
      value: "es-MX-LibertoNeural",
      label: $t("tts.azure.options.speaker.liberto"),
      styles: [
        {
          value: "chat",
          label: $t("tts.azure.options.style.chat"),
        },
      ],
    },
    {
      value: "es-MX-LucianoNeural",
      label: $t("tts.azure.options.speaker.luciano"),
      styles: [
        {
          value: "chat",
          label: $t("tts.azure.options.style.chat"),
        },
      ],
    },
    {
      value: "es-MX-MarinaNeural",
      label: $t("tts.azure.options.speaker.marina"),
      styles: [
        {
          value: "chat",
          label: $t("tts.azure.options.style.chat"),
        },
      ],
    },
    {
      value: "es-MX-NuriaNeural",
      label: $t("tts.azure.options.speaker.nuria"),
      styles: [
        {
          value: "chat",
          label: $t("tts.azure.options.style.chat"),
        },
      ],
    },
    {
      value: "es-MX-PelayoNeural",
      label: $t("tts.azure.options.speaker.pelayo"),
      styles: [
        {
          value: "chat",
          label: $t("tts.azure.options.style.chat"),
        },
      ],
    },
    {
      value: "es-MX-RenataNeural",
      label: $t("tts.azure.options.speaker.renata"),
      styles: [
        {
          value: "chat",
          label: $t("tts.azure.options.style.chat"),
        },
      ],
    },
    {
      value: "es-MX-YagoNeural",
      label: $t("tts.azure.options.speaker.yago"),
      styles: [
        {
          value: "chat",
          label: $t("tts.azure.options.style.chat"),
        },
      ],
    },
  ],
}));
