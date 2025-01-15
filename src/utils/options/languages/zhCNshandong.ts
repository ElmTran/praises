import type { LanguageOption } from "../../constants";
import { $t } from "../../../locales";
import { computed, type ComputedRef } from "vue";

export const zhCNshandong: ComputedRef<LanguageOption> = computed(() => ({
  value: "zh-CN-shandong",
  label: $t("tts.azure.options.language.zh_CN_shandong"),
  speakers: [
    {
      value: "zh-CN-shandong-YunxiangNeural",
      label: $t("tts.azure.options.speaker.yunxiang"),
      styles: [
        {
          value: "default",
          label: $t("tts.azure.options.style.default"),
        },
      ],
    },
  ],
}));
