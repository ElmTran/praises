import type { LanguageOption } from "../../constants";
import { $t } from "../../../locales";
import { computed, type ComputedRef } from "vue";

export const zhCNGUANGXI: ComputedRef<LanguageOption> = computed(() => ({
  value: "zh-CN-guangxi",
  label: $t("tts.azure.options.language.zh_CN_guangxi"),
  speakers: [
    {
      value: "zh-CN-guangxi-YunqiNeural",
      label: $t("tts.azure.options.speaker.yunqi"),
      styles: [
        {
          value: "default",
          label: $t("tts.azure.options.style.default"),
        },
      ],
    }
  ],
}));
