import type { LanguageOption } from "../../constants";
import { $t } from "../../../locales";
import { computed, type ComputedRef } from "vue";

export const elGR: ComputedRef<LanguageOption> = computed(() => ({
  value: "el-GR",
  label: $t("tts.azure.options.language.el_GR"),
  speakers: [
    {
      value: "el-GR-AthinaNeural",
      label: $t("tts.azure.options.speaker.athina"),
      styles: [
        {
          value: "default",
          label: $t("tts.azure.options.style.default"),
        },
      ],
    },
    {
      value: "el-GR-NestorasNeural",
      label: $t("tts.azure.options.speaker.nestoras"),
      styles: [
        {
          value: "default",
          label: $t("tts.azure.options.style.default"),
        },
      ],
    },
  ],
}));
