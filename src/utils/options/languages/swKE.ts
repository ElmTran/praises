import type { LanguageOption } from "../../constants";
import { $t } from "../../../locales";

export const swKE: LanguageOption = {
  value: "sw-KE",
  label: $t("tts.azure.options.language.sw_KE"),
  speakers: [
    {
      value: "sw-KE-ZuriNeural",
      label: $t("tts.azure.options.speaker.zuri"),
      styles: [
        {
          value: "default",
          label: $t("tts.azure.options.style.default"),
        },
      ],
    },
    {
      value: "sw-KE-RafikiNeural",
      label: $t("tts.azure.options.speaker.rafiki"),
      styles: [
        {
          value: "default",
          label: $t("tts.azure.options.style.default"),
        },
      ],
    },
  ],
};
