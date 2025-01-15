import type { LanguageOption } from "../../constants";
import { $t } from "../../../locales";
import { computed, type ComputedRef } from "vue";

export const swKE: ComputedRef<LanguageOption> = computed(() => ({
  value: "sw-KE",
  label: $t("tts.azure.options.language.sw_KE"),
  speakers: [
    {
      value: "sw-KE-ZuriNeural",
      label: $t("tts.azure.options.speaker.zuri"),
      styles: [
        {
          value: "default",
          label: $t("tts.azure.options.style.default"),
        },
      ],
    },
    {
      value: "sw-KE-RafikiNeural",
      label: $t("tts.azure.options.speaker.rafiki"),
      styles: [
        {
          value: "default",
          label: $t("tts.azure.options.style.default"),
        },
      ],
    },
  ],
}));
