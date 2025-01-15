import type { LanguageOption } from "../../constants";
import { $t } from "../../../locales";
import { computed, type ComputedRef } from "vue";

export const soSO: ComputedRef<LanguageOption> = computed(() => ({
  value: "so-SO",
  label: $t("tts.azure.options.language.so_SO"),
  speakers: [
    {
      value: "so-SO-UbaxNeural",
      label: $t("tts.azure.options.speaker.ubax"),
      styles: [
        {
          value: "default",
          label: $t("tts.azure.options.style.default"),
        },
      ],
    },
    {
      value: "so-SO-MuuseNeural",
      label: $t("tts.azure.options.speaker.muuse"),
      styles: [
        {
          value: "default",
          label: $t("tts.azure.options.style.default"),
        },
      ],
    },
  ],
}));
