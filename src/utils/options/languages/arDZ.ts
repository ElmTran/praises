import type { LanguageOption } from "../../constants";
import { $t } from "../../../locales";
import { computed, type ComputedRef } from "vue";

export const arDZ: ComputedRef<LanguageOption> = computed(() => ({
  value: "ar-DZ",
  label: $t("tts.azure.options.language.ar_DZ"),
  speakers: [
    {
      value: "ar-DZ-AminaNeural",
      label: $t("tts.azure.options.speaker.amina"),
      styles: [
        {
          value: "chat",
          label: $t("tts.azure.options.style.chat"),
        },
      ],
    },
    {
      value: "ar-DZ-IsmaelNeural",
      label: $t("tts.azure.options.speaker.ismael"),
      styles: [
        {
          value: "chat",
          label: $t("tts.azure.options.style.chat"),
        },
      ],
    },
  ],
}));
