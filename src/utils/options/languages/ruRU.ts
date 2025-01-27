import type { LanguageOption } from "../../constants";
import { $t } from "../../../locales";
import { computed, type ComputedRef } from "vue";

export const ruRU: ComputedRef<LanguageOption> = computed(() => ({
  value: "ru-RU",
  label: $t("tts.azure.options.language.ru_RU"),
  speakers: [
    {
      value: "ru-RU-SvetlanaNeural",
      label: $t("tts.azure.options.speaker.svetlana"),
      styles: [
        {
          value: "default",
          label: $t("tts.azure.options.style.default"),
        },
      ],
    },
    {
      value: "ru-RU-DmitryNeural",
      label: $t("tts.azure.options.speaker.dmitry"),
      styles: [
        {
          value: "default",
          label: $t("tts.azure.options.style.default"),
        },
      ],
    },
    {
      value: "ru-RU-DariyaNeural",
      label: $t("tts.azure.options.speaker.dariya"),
      styles: [
        {
          value: "default",
          label: $t("tts.azure.options.style.default"),
        }
      ],
    },
  ],
}));
