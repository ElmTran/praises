import type { LanguageOption } from "../../constants";
import { $t } from "../../../locales";
import { computed, type ComputedRef } from "vue";
export const amET: ComputedRef<LanguageOption> = computed(() => ({
  value: "am-ET",
  label: $t("tts.azure.options.language.am_ET"),
  speakers: [
    {
      value: "am-ET-MekdesNeural",
      label: $t("tts.azure.options.speaker.mekdes"),
      styles: [
        {
          value: "chat",
          label: $t("tts.azure.options.style.chat"),
        },
      ],
    },
    {
      value: "am-ET-AmehaNeural",
      label: $t("tts.azure.options.speaker.ameha"),
      styles: [
        {
          value: "chat",
          label: $t("tts.azure.options.style.chat"),
        },
      ],
    },
  ],
}));
