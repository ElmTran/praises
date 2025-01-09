import type { LanguageOption } from "../../constants";
import { $t } from "../../../locales";

export const enSG: LanguageOption = {
  value: "en-SG",
  label: $t("tts.azure.options.language.en_SG"),
  speakers: [
    {
      value: "en-SG-JayNeural",
      label: $t("tts.azure.options.speaker.jay"),
      styles: [
        {
          value: "default",
          label: $t("tts.azure.options.style.default"),
        },
      ],
    },
    {
      value: "en-SG-JasmineNeural",
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
