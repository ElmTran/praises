import type { LanguageOption } from "../../constants";
import { $t } from "../../../locales";

export const zhTW: LanguageOption = {
  value: "zh-TW",
  label: $t("tts.azure.options.language.zh_TW"),
  speakers: [
    {
      value: "zh-TW-HsiaoChenNeural",
      label: $t("tts.azure.options.speaker.hsiao_chen"),
      styles: [
        {
          value: "default",
          label: $t("tts.azure.options.style.default"),
        },
      ],
    },
    {
      value: "zh-TW-YunJheNeural",
      label: $t("tts.azure.options.speaker.yun_jhe"),
      styles: [
        {
          value: "default",
          label: $t("tts.azure.options.style.default"),
        },
      ],
    },
    {
      value: "zh-TW-HsiaoYuNeural",
      label: $t("tts.azure.options.speaker.hsiao_yu"),
      styles: [
        {
          value: "default",
          label: $t("tts.azure.options.style.default"),
        },
      ],
    },
  ],
};
