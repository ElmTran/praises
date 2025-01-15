import type { LanguageOption } from "../../constants";
import { $t } from "../../../locales";
import { computed, type ComputedRef } from "vue";

export const jvID: ComputedRef<LanguageOption> = computed(() => ({
  value: "jv-ID",
  label: $t("tts.azure.options.language.jv_ID"),
  speakers: [
    {
      value: "jv-ID-SitiNeural",
      label: $t("tts.azure.options.speaker.siti"),
      styles: [
        {
          value: "default",
          label: $t("tts.azure.options.style.default"),
        },
      ],
    },
    {
      value: "jv-ID-DimasNeural",
      label: $t("tts.azure.options.speaker.dimas"),
      styles: [
        {
          value: "default",
          label: $t("tts.azure.options.style.default"),
        },
      ],
    },
  ],
}));
