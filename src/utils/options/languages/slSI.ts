// sl-SI file created
import type { LanguageOption } from "../../constants";
import { $t } from "../../../locales";

export const slSI: LanguageOption = {
  value: "sl-SI",
  label: $t("tts.azure.options.language.sl_SI"),
  speakers: [
    {
      value: "sl-SI-PetraNeural",
      label: $t("tts.azure.options.speaker.petra"),
      styles: [
        {
          value: "default",
          label: $t("tts.azure.options.style.default"),
        },
      ],
    },
    {
      value: "sl-SI-RokNeural",
      label: $t("tts.azure.options.speaker.rok"),
      styles: [
        {
          value: "default",
          label: $t("tts.azure.options.style.default"),
        },
      ],
    },
  ],
};
