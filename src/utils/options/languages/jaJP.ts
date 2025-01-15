import type { LanguageOption } from "../../constants";
import { $t } from "../../../locales";
import { computed, type ComputedRef } from "vue";

export const jaJP: ComputedRef<LanguageOption> = computed(() => ({
  value: "ja-JP",
  label: $t("tts.azure.options.language.ja_JP"),
  speakers: [
    {
      value: "ja-JP-NanamiNeural",
      label: $t("tts.azure.options.speaker.nanami"),
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
          value: "customerservice",
          label: $t("tts.azure.options.style.customerservice"),
        },
      ],
    },
    {
      value: "ja-JP-KeitaNeural",
      label: $t("tts.azure.options.speaker.keita"),
      styles: [
        {
          value: "default",
          label: $t("tts.azure.options.style.default"),
        },
      ],
    },
    {
      value: "ja-JP-AoiNeural",
      label: $t("tts.azure.options.speaker.aoi"),
      styles: [
        {
          value: "default",
          label: $t("tts.azure.options.style.default"),
        },
      ],
    },
    {
      value: "ja-JP-DaichiNeural",
      label: $t("tts.azure.options.speaker.daichi"),
      styles: [
        {
          value: "default",
          label: $t("tts.azure.options.style.default"),
        },
      ],
    },
    {
      value: "ja-JP-MayuNeural",
      label: $t("tts.azure.options.speaker.mayu"),
      styles: [
        {
          value: "default",
          label: $t("tts.azure.options.style.default"),
        },
      ],
    },
    {
      value: "ja-JP-NaokiNeural",
      label: $t("tts.azure.options.speaker.naoki"),
      styles: [
        {
          value: "default",
          label: $t("tts.azure.options.style.default"),
        },
      ],
    },
    {
      value: "ja-JP-ShioriNeural",
      label: $t("tts.azure.options.speaker.shiori"),
      styles: [
        {
          value: "default",
          label: $t("tts.azure.options.style.default"),
        },
      ],
    },
    {
        value: "ja-JP-MasaruMultilingualNeural",
        label: $t("tts.azure.options.speaker.masaru"),
        styles: [
          {
            value: "default",
            label: $t("tts.azure.options.style.default"),
          },
        ],
    }
  ],
}));
