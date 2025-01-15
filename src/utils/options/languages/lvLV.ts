import type { LanguageOption } from "../../constants";
import { $t } from "../../../locales";
import { computed, type ComputedRef } from "vue";

export const lvLV: ComputedRef<LanguageOption> = computed(() => ({
  value: "lv-LV",
  label: $t("tts.azure.options.language.lv_LV"),
  speakers: [
    {
      value: "lv-LV-EveritaNeural",
      label: $t("tts.azure.options.speaker.everita"),
      styles: [
        {
          value: "default",
          label: $t("tts.azure.options.style.default"),
        },
      ],
    },
    {
      value: "lv-LV-NilsNeural",
      label: $t("tts.azure.options.speaker.nils"),
      styles: [
        {
          value: "default",
          label: $t("tts.azure.options.style.default"),
        },
      ],
    },
  ],
}));
