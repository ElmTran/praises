
import type { LanguageOption } from "../../constants";
import { $t } from "../../../locales";

export const esCU: LanguageOption = {
  value: "es-CU",
  label: $t("tts.azure.options.language.es_CU"),
  speakers: [
    {
      value: "es-CU-BelkysNeural",
      label: $t("tts.azure.options.speaker.belkys"),
      styles: [
        {
          value: "default",
          label: $t("tts.azure.options.style.default"),
        },
      ],
    },
    {
      value: "es-CU-ManuelNeural",
      label: $t("tts.azure.options.speaker.manuel"),
      styles: [
        {
          value: "default",
          label: $t("tts.azure.options.style.default"),
        },
      ],
    },
  ],
};

