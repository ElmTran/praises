import type { LanguageOption } from "../../constants";
import { $t } from "../../../locales";
import { computed, type ComputedRef } from "vue";

export const zhCNsichuan: ComputedRef<LanguageOption> = computed(() => ({
  value: "zh-CN-sichuan",
  label: $t("tts.azure.options.language.zh_CN_sichuan"),
  speakers: [
    {
      value: "zh-CN-sichuan-YunxiNeural",
      label: $t("tts.azure.options.speaker.yunxi"),
      styles: [
        {
          value: "default",
          label: $t("tts.azure.options.style.default"),
        },
      ],
    },
  ],
}));
