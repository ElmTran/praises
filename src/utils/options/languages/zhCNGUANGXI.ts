import type { LanguageOption } from "../../constants";
import { $t } from "../../../locales";

export const zhCNGUANGXI: LanguageOption = {
  value: "zh-CN-guangxi",
  label: $t("tts.azure.options.language.zh_CN_guangxi"),
  speakers: [
    {
      value: "zh-CN-guangxi-YunqiNeural",
      label: $t("tts.azure.options.speaker.yunqi"),
      styles: [
        {
          value: "default",
          label: $t("tts.azure.options.style.default"),
        },
      ],
    }
  ],
};
