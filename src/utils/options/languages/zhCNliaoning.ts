import type { LanguageOption } from "../../constants";
import { $t } from "../../../locales";
import { computed, type ComputedRef } from "vue";
export const zhCNliaoning: ComputedRef<LanguageOption> = computed(() => ({
  value: "zh-CN-liaoning",
  label: $t("tts.azure.options.language.zh_CN_liaoning"),
  speakers: [
    {
      value: "zh-CN-liaoning-XiaobeiNeural",
      label: $t("tts.azure.options.speaker.xiaobei"),
      styles: [
        {
          value: "default",
          label: $t("tts.azure.options.style.default"),
        },
      ],
    },
    {
      value: "zh-CN-liaoning-YunbiaoNeural",
      label: $t("tts.azure.options.speaker.yunbiao"),
      styles: [
        {
          value: "default",
          label: $t("tts.azure.options.style.default"),
        },
      ],
    },
  ],
}));
