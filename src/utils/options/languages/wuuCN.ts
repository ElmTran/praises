import type { LanguageOption } from "../../constants";
import { $t } from "../../../locales";

export const wuuCN: LanguageOption = {
  value: "wuu-CN",
  label: $t("tts.azure.options.language.wuu_CN"),
  speakers: [
    {
      value: "wuu-CN-XiaotongNeural",
      label: $t("tts.azure.options.speaker.xiaotong"),
      styles: [
        {
          value: "default",
          label: $t("tts.azure.options.style.default"),
        },
      ],
    },
    {
      value: "wuu-CN-YunzheNeura",
      label: $t("tts.azure.options.speaker.yunzhe"),
      styles: [
        {
          value: "default",
          label: $t("tts.azure.options.style.default"),
        },
      ],
    },
  ],
};
