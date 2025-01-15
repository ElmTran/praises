import type { LanguageOption } from "../../constants";
import { $t } from "../../../locales";
import { computed, type ComputedRef } from "vue";

export const swTZ: ComputedRef<LanguageOption> = computed(() => ({
  value: "sw-TZ",
  label: $t("tts.azure.options.language.sw_TZ"),
  speakers: [
    {
      value: "sw-TZ-RehemaNeural",
      label: $t("tts.azure.options.speaker.rehema"),
      styles: [
        {
          value: "default",
          label: $t("tts.azure.options.style.default"),
        },
      ],
    },
    {
      value: "sw-TZ-DaudiNeural",
      label: $t("tts.azure.options.speaker.daudi"),
      styles: [
        {
          value: "default",
          label: $t("tts.azure.options.style.default"),
        },
      ],
    },
  ],
}));
