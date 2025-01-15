import type { LanguageOption } from "../../constants";
import { $t } from "../../../locales";
import { computed, type ComputedRef } from "vue";

export const zhCHhenan: ComputedRef<LanguageOption> = computed(() => ({
  value: "zh-CN-henan",
  label: $t("tts.azure.options.language.zh_CN_henan"),
  speakers: [
    {
      value: "zh-CN-henan-YundengNeural",
      label: $t("tts.azure.options.speaker.yundeng"),
      styles: [
        {
          value: "default",
          label: $t("tts.azure.options.style.default"),
        },
      ],
    },
  ],
}));
