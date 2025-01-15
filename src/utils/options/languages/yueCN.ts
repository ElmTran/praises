import type { LanguageOption } from "../../constants";
import { $t } from "../../../locales";
import { computed, type ComputedRef } from "vue";

export const yueCN: ComputedRef<LanguageOption> = computed(() => ({
  value: "yue-CN",
  label: $t("tts.azure.options.language.yue_CN"),
  speakers: [
    {
      value: "yue-CN-XiaoMinNeural",
      label: $t("tts.azure.options.speaker.xiaomin"),
      styles: [
        {
          value: "default",
          label: $t("tts.azure.options.style.default"),
        },
      ],
    },
    {
      value: "yue-CN-YunSongNeural",
      label: $t("tts.azure.options.speaker.yunsong"),
      styles: [
        {
          value: "default",
          label: $t("tts.azure.options.style.default"),
        },
      ],
    },
  ],
}));
