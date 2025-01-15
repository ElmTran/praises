import type { LanguageOption } from "../../constants";
import { $t } from "../../../locales";
import { computed, type ComputedRef } from "vue";

export const esES: ComputedRef<LanguageOption> = computed(() => ({
  value: "es-ES",
  label: $t("tts.azure.options.language.es_ES"),
  speakers: [
    {
      value: "es-ES-ElviraNeural",
      label: $t("tts.azure.options.speaker.elvira"),
      styles: [
        {
          value: "default",
          label: $t("tts.azure.options.style.default"),
        },
      ],
    },
    {
      value: "es-ES-AlvaroNeural",
      label: $t("tts.azure.options.speaker.alvaro"),
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
          value: "default",
          label: $t("tts.azure.options.style.default"),
        },
      ],
    },
    {
      value: "es-ES-AbrilNeural",
      label: $t("tts.azure.options.speaker.abril"),
      styles: [
        {
          value: "default",
          label: $t("tts.azure.options.style.default"),
        },
      ],
    },
    {
      value: "es-ES-ArnauNeural",
      label: $t("tts.azure.options.speaker.arnau"),
      styles: [
        {
          value: "default",
          label: $t("tts.azure.options.style.default"),
        },
      ],
    },
    {
      value: "es-ES-DarioNeural",
      label: $t("tts.azure.options.speaker.dario"),
      styles: [
        {
          value: "default",
          label: $t("tts.azure.options.style.default"),
        },
      ],
    },
    {
      value: "es-ES-EliasNeural",
      label: $t("tts.azure.options.speaker.elias"),
      styles: [
        {
          value: "default",
          label: $t("tts.azure.options.style.default"),
        },
      ],
    },
    {
      value: "es-ES-EstrellaNeural",
      label: $t("tts.azure.options.speaker.estrella"),
      styles: [
        {
          value: "default",
          label: $t("tts.azure.options.style.default"),
        },
      ],
    },
    {
      value: "es-ES-IreneNeural",
      label: $t("tts.azure.options.speaker.irene"),
      styles: [
        {
          value: "default",
          label: $t("tts.azure.options.style.default"),
        },
      ],
    },
    {
      value: "es-ES-LaiaNeural",
      label: $t("tts.azure.options.speaker.laia"),
      styles: [
        {
          value: "default",
          label: $t("tts.azure.options.style.default"),
        },
      ],
    },
    {
      value: "es-ES-LiaNeural",
      label: $t("tts.azure.options.speaker.lia"),
      styles: [
        {
          value: "default",
          label: $t("tts.azure.options.style.default"),
        },
      ],
    },
    {
      value: "es-ES-NilNeural",
      label: $t("tts.azure.options.speaker.nil"),
      styles: [
        {
          value: "default",
          label: $t("tts.azure.options.style.default"),
        },
      ],
    },
    {
      value: "es-ES-SaulNeural",
      label: $t("tts.azure.options.speaker.saul"),
      styles: [
        {
          value: "default",
          label: $t("tts.azure.options.style.default"),
        },
      ],
    },
    {
      value: "es-ES-TeoNeural",
      label: $t("tts.azure.options.speaker.teo"),
      styles: [
        {
          value: "default",
          label: $t("tts.azure.options.style.default"),
        },
      ],
    },
    {
      value: "es-ES-TrianaNeural",
      label: $t("tts.azure.options.speaker.triana"),
      styles: [
        {
          value: "default",
          label: $t("tts.azure.options.style.default"),
        },
      ],
    },
    {
      value: "es-ES-VeraNeural",
      label: $t("tts.azure.options.speaker.vera"),
      styles: [
        {
          value: "default",
          label: $t("tts.azure.options.style.default"),
        },
      ],
    },
    {
      value: "es-ES-XimenaNeural",
      label: $t("tts.azure.options.speaker.ximena"),
      styles: [
        {
          value: "default",
          label: $t("tts.azure.options.style.default"),
        },
      ],
    },
    {
      value: "es-ES-ArabellaMultilingualNeural",
      label: $t("tts.azure.options.speaker.arabella"),
      styles: [
        {
          value: "default",
          label: $t("tts.azure.options.style.default"),
        },
      ],
    },
    {
      value: "es-ES-IsidoraMultilingualNeural",
      label: $t("tts.azure.options.speaker.isidora"),
      styles: [
        {
          value: "default",
          label: $t("tts.azure.options.style.default"),
        },
      ],
    },
    {
      value: "es-ES-TristanMultilingualNeural",
      label: $t("tts.azure.options.speaker.tristan"),
      styles: [
        {
          value: "default",
          label: $t("tts.azure.options.style.default"),
        },
      ],
    },
    {
      value: "es-ES-XimenaMultilingualNeural",
      label: $t("tts.azure.options.speaker.ximena"),
      styles: [
        {
          value: "default",
          label: $t("tts.azure.options.style.default"),
        },
      ],
    },
  ],
}));
