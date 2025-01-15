import type { LanguageOption } from "../../constants";
import { $t } from "../../../locales";
import { computed, type ComputedRef } from "vue";

export const isIS: ComputedRef<LanguageOption> = computed(() => ({
  value: "is-IS",
  label: $t("tts.azure.options.language.is_IS"),
  speakers: [
    {
      value: "is-IS-GudrunNeural",
      label: $t("tts.azure.options.speaker.gudrun"),
      styles: [
        {
          value: "default",
          label: $t("tts.azure.options.style.default"),
        },
      ],
    },
    {
      value: "is-IS-GunnarNeural",
      label: $t("tts.azure.options.speaker.gunnar"),
      styles: [
        {
          value: "default",
          label: $t("tts.azure.options.style.default"),
        }
      ],
    },
  ],
}));
