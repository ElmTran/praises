import type { LanguageOption } from "../../constants";
import { $t } from "../../../locales";
import { computed, type ComputedRef } from "vue";

export const zhCNshaanxi: ComputedRef<LanguageOption> = computed(() => ({
  value: "zh-CN-shaanxi",
  label: $t("tts.azure.options.language.zh_CN_shaanxi"),
  speakers: [
    {
      value: "zh-CN-shaanxi-XiaoniNeural",
      label: $t("tts.azure.options.speaker.xiaoni"),
      styles: [
        {
          value: "default",
          label: $t("tts.azure.options.style.default"),
        },
      ],
    },
  ],
}));
