import type { LanguageOption } from "../../constants";
import { $t } from "../../../locales";

export const enTZ: LanguageOption = {
  value: "en-TZ",
  label: $t("tts.azure.options.language.en_TZ"),
  speakers: [
    {
      value: "en-TZ-JayNeural",
      label: $t("tts.azure.options.speaker.jay"),
      styles: [
        {
          value: "default",
          label: $t("tts.azure.options.style.default"),
        },
      ],
    },
    {
      value: "en-TZ-JasmineNeural",
      label: $t("tts.azure.options.speaker.jasmine"),
      styles: [
        {
          value: "default",
          label: $t("tts.azure.options.style.default"),
        },
      ],
    },
  ],
};