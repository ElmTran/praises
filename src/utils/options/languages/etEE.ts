
import type { LanguageOption } from "../../constants";
import { $t } from "../../../locales";
import { computed, type ComputedRef } from "vue";

export const etEE: ComputedRef<LanguageOption> = computed(() => ({
  value: "et-EE",
  label: $t("tts.azure.options.language.et_EE"),
  speakers: [
    {
      value: "et-EE-AnuNeura",
      label: $t("tts.azure.options.speaker.anu"),
      styles: [
        {
          value: "default",
          label: $t("tts.azure.options.style.default"),
        },
      ],
    },
    {
      value: "et-EE-KertNeural",
      label: $t("tts.azure.options.speaker.kert"),
      styles: [
        {
          value: "default",
          label: $t("tts.azure.options.style.default"),
        },
      ],
    },
  ],
}));
