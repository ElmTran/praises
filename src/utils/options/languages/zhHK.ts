import type { LanguageOption } from "../../constants";
import { $t } from "../../../locales";
import { computed, type ComputedRef } from "vue";

export const zhHK: ComputedRef<LanguageOption> = computed(() => ({
  value: "zh-HK",
  label: $t("tts.azure.options.language.zh_HK"),
  speakers: [
    {
      value: "zh-HK-HiuMaanNeural",
      label: $t("tts.azure.options.speaker.hiuMaan"),
      styles: [
        {
          value: "default",
          label: $t("tts.azure.options.style.default"),
        },
      ],
    },
    {
      value: "zh-HK-WanLungNeural",
      label: $t("tts.azure.options.speaker.wanLung"),
      styles: [
        {
          value: "default",
          label: $t("tts.azure.options.style.default"),
        },
      ],
    },
    {
      value: "zh-HK-HiuGaaiNeural",
      label: $t("tts.azure.options.speaker.hiuGaai"),
      styles: [
        {
          value: "default",
          label: $t("tts.azure.options.style.default"),
        },
      ],
    },
  ],
}));
