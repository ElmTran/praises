import type { LanguageOption } from "../../constants";
import { $t } from "../../../locales";

export const koKR: LanguageOption = {
  value: "ko-KR",
  label: $t("tts.azure.options.language.ko_KR"),
  speakers: [
    {
      value: "ko-KR-SunHiNeural",
      label: $t("tts.azure.options.speaker.sunhi"),
      styles: [
        {
          value: "default",
          label: $t("tts.azure.options.style.default"),
        },
      ],
    },
    {
      value: "ko-KR-InJoonNeural",
      label: $t("tts.azure.options.speaker.injoon"),
      styles: [
        {
          value: "sad",
          label: $t("tts.azure.options.style.sad"),
        },
      ],
    },
    {
      value: "ko-KR-BongJinNeural",
      label: $t("tts.azure.options.speaker.bongjin"),
      styles: [
        {
          value: "default",
          label: $t("tts.azure.options.style.default"),
        },
      ],
    },
    {
      value: "ko-KR-GookMinNeural",
      label: $t("tts.azure.options.speaker.gookmin"),
      styles: [
        {
          value: "default",
          label: $t("tts.azure.options.style.default"),
        },
      ],
    },
    {
      value: "ko-KR-HyunsuNeural",
      label: $t("tts.azure.options.speaker.hyunsu"),
      styles: [
        {
          value: "default",
          label: $t("tts.azure.options.style.default"),
        },
      ],
    },
    {
      value: "ko-KR-JiMinNeural",
      label: $t("tts.azure.options.speaker.jimin"),
      styles: [
        {
          value: "default",
          label: $t("tts.azure.options.style.default"),
        },
      ],
    },
    {
      value: "ko-KR-SeoHyeonNeural",
      label: $t("tts.azure.options.speaker.seohyeon"),
      styles: [
        {
          value: "default",
          label: $t("tts.azure.options.style.default"),
        },
      ],
    },
    {
      value: "ko-KR-SoonBokNeural",
      label: $t("tts.azure.options.speaker.soonbok"),
      styles: [
        {
          value: "default",
          label: $t("tts.azure.options.style.default"),
        },
      ],
    },
    {
      value: "ko-KR-YuJinNeural",
      label: $t("tts.azure.options.speaker.yujin"),
      styles: [
        {
          value: "default",
          label: $t("tts.azure.options.style.default"),
        },
      ],
    },
    {
      value: "ko-KR-HyunsuMultilingualNeural",
      label: $t("tts.azure.options.speaker.hyunsumultilingual"),
      styles: [
        {
          value: "default",
          label: $t("tts.azure.options.style.default"),
        },
      ],
    },
  ],
};
