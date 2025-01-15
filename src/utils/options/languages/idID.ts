import type { LanguageOption } from "../../constants";
import { $t } from "../../../locales";
import { computed, type ComputedRef } from "vue";

export const idID: ComputedRef<LanguageOption> = computed(() => ({
  value: "id-ID",
  label: $t("tts.azure.options.language.id_ID"),
  speakers: [
    {
      value: "id-ID-GadisNeural",
      label: $t("tts.azure.options.speaker.gadis"),
      styles: [
        {
          value: "default",
          label: $t("tts.azure.options.style.default"),
        },
      ],
    },
    {
      value: "id-ID-ArdiNeural",
      label: $t("tts.azure.options.speaker.ardi"),
      styles: [
        {
          value: "default",
          label: $t("tts.azure.options.style.default"),
        },
      ],
    },
  ],
}));
