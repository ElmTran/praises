// pl-PL file created
import type { LanguageOption } from "../../constants";
import { $t } from "../../../locales";
import { computed, type ComputedRef } from "vue";

export const plPL: ComputedRef<LanguageOption> = computed(() => ({
  value: "pl-PL",
  label: $t("tts.azure.options.language.pl_PL"),
  speakers: [
    {
      value: "pl-PL-AgnieszkaNeural",
      label: $t("tts.azure.options.speaker.agnieszka"),
      styles: [
        {
          value: "default",
          label: $t("tts.azure.options.style.default"),
        }
      ],
    },
    {
      value: "pl-PL-MarekNeural",
      label: $t("tts.azure.options.speaker.marek"),
      styles: [
        {
          value: "default",
          label: $t("tts.azure.options.style.default"),
        }
      ],
    },
    {
      value: "pl-PL-ZofiaNeural",
      label: $t("tts.azure.options.speaker.zofia"),
      styles: [
        {
          value: "default",
          label: $t("tts.azure.options.style.default"),
        }
      ],
    },
  ],
}));
