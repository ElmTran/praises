import type { LanguageOption } from "../../constants";
import { $t } from "../../../locales";
import { computed, type ComputedRef } from "vue";

export const kaGE: ComputedRef<LanguageOption> = computed(() => ({
  value: "ka-GE",
  label: $t("tts.azure.options.language.ka_GE"),
  speakers: [
    {
      value: "ka-GE-EkaNeural",
      label: $t("tts.azure.options.speaker.eka"),
      styles: [
        {
          value: "default",
          label: $t("tts.azure.options.style.default"),
        },
      ],
    },
    {
      value: "ka-GE-GiorgiNeural",
      label: $t("tts.azure.options.speaker.giorgi"),
      styles: [
        {
          value: "default",
          label: $t("tts.azure.options.style.default"),
        },
      ],
    },
  ],
}));
