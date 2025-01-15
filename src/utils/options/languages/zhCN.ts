import type { LanguageOption } from "../../constants";
import { $t } from "../../../locales";
import { computed, type ComputedRef } from "vue";
export const zhCN: ComputedRef<LanguageOption> = computed(() => ({
  value: "zh-CN",
  label: $t("tts.azure.options.language.zh_CN"),
  speakers: [
    {
      value: "zh-CN-XiaoxiaoNeural",
      label: $t("tts.azure.options.speaker.xiaoxiao"),
      styles: [
        {
          value: "affectionate",
          label: $t("tts.azure.options.style.affectionate"),
        },
        { value: "angry", label: $t("tts.azure.options.style.angry") },
        {
          value: "assistant",
          label: $t("tts.azure.options.style.assistant"),
        },
        { value: "calm", label: $t("tts.azure.options.style.calm") },
        { value: "chat", label: $t("tts.azure.options.style.chat") },
        {
          value: "chat - casual",
          label: $t("tts.azure.options.style.chatCasual"),
        },
        { value: "cheerful", label: $t("tts.azure.options.style.cheerful") },
        {
          value: "customerservice",
          label: $t("tts.azure.options.style.customerservice"),
        },
        {
          value: "disgruntled",
          label: $t("tts.azure.options.style.disgruntled"),
        },
        { value: "fearful", label: $t("tts.azure.options.style.fearful") },
        { value: "friendly", label: $t("tts.azure.options.style.friendly") },
        { value: "gentle", label: $t("tts.azure.options.style.gentle") },
        { value: "lyrical", label: $t("tts.azure.options.style.lyrical") },
        { value: "newscast", label: $t("tts.azure.options.style.newscast") },
        {
          value: "poetry - reading",
          label: $t("tts.azure.options.style.poetryReading"),
        },
        { value: "sad", label: $t("tts.azure.options.style.sad") },
        { value: "serious", label: $t("tts.azure.options.style.serious") },
        { value: "sorry", label: $t("tts.azure.options.style.sorry") },
        { value: "whisper", label: $t("tts.azure.options.style.whisper") },
      ],
    },
    {
      value: "zh-CN-XiaomoNeural",
      label: $t("tts.azure.options.speaker.xiaomo"),
      styles: [
        {
          value: "affectionate",
          label: $t("tts.azure.options.style.affectionate"),
        },
        { value: "angry", label: $t("tts.azure.options.style.angry") },
        { value: "calm", label: $t("tts.azure.options.style.calm") },
        { value: "cheerful", label: $t("tts.azure.options.style.cheerful") },
        {
          value: "depressed",
          label: $t("tts.azure.options.style.depressed"),
        },
        {
          value: "disgruntled",
          label: $t("tts.azure.options.style.disgruntled"),
        },
        {
          value: "embarrassed",
          label: $t("tts.azure.options.style.embarrassed"),
        },
        { value: "envious", label: $t("tts.azure.options.style.envious") },
        { value: "fearful", label: $t("tts.azure.options.style.fearful") },
        { value: "gentle", label: $t("tts.azure.options.style.gentle") },
        { value: "sad", label: $t("tts.azure.options.style.sad") },
        { value: "serious", label: $t("tts.azure.options.style.serious") },
      ],
      roles: [
        { value: "Boy", label: $t("tts.azure.options.role.boy") },
        { value: "Girl", label: $t("tts.azure.options.role.girl") },
        {
          value: "OlderAdultFemale",
          label: $t("tts.azure.options.role.olderAdultFemale"),
        },
        {
          value: "OlderAdultMale",
          label: $t("tts.azure.options.role.olderAdultMale"),
        },
        {
          value: "SeniorFemale",
          label: $t("tts.azure.options.role.seniorFemale"),
        },
        {
          value: "SeniorMale",
          label: $t("tts.azure.options.role.seniorMale"),
        },
        {
          value: "YoungAdultFemale",
          label: $t("tts.azure.options.role.youngAdultFemale"),
        },
        {
          value: "YoungAdultMale",
          label: $t("tts.azure.options.role.youngAdultMale"),
        },
      ],
    },
    {
      value: "zh-CN-YunyeNeural",
      label: $t("tts.azure.options.speaker.yunye"),
      styles: [
        { value: "angry", label: $t("tts.azure.options.style.angry") },
        { value: "calm", label: $t("tts.azure.options.style.calm") },
        { value: "cheerful", label: $t("tts.azure.options.style.cheerful") },
        {
          value: "disgruntled",
          label: $t("tts.azure.options.style.disgruntled"),
        },
        {
          value: "embarrassed",
          label: $t("tts.azure.options.style.embarrassed"),
        },
        { value: "fearful", label: $t("tts.azure.options.style.fearful") },
        { value: "sad", label: $t("tts.azure.options.style.sad") },
        { value: "serious", label: $t("tts.azure.options.style.serious") },
      ],
      roles: [
        { value: "Boy", label: $t("tts.azure.options.role.boy") },
        { value: "Girl", label: $t("tts.azure.options.role.girl") },
        {
          value: "OlderAdultFemale",
          label: $t("tts.azure.options.role.olderAdultFemale"),
        },
        {
          value: "OlderAdultMale",
          label: $t("tts.azure.options.role.olderAdultMale"),
        },
        {
          value: "SeniorFemale",
          label: $t("tts.azure.options.role.seniorFemale"),
        },
        {
          value: "SeniorMale",
          label: $t("tts.azure.options.role.seniorMale"),
        },
        {
          value: "YoungAdultFemale",
          label: $t("tts.azure.options.role.youngAdultFemale"),
        },
        {
          value: "YoungAdultMale",
          label: $t("tts.azure.options.role.youngAdultMale"),
        },
      ],
    },
    {
      value: "zh-CN-YunxiNeural",
      label: $t("tts.azure.options.speaker.yunxi"),
      styles: [
        { value: "angry", label: $t("tts.azure.options.style.angry") },
        { value: "assistant", label: $t("tts.azure.options.style.assistant") },
        { value: "calm", label: $t("tts.azure.options.style.calm") },
        { value: "cheerful", label: $t("tts.azure.options.style.cheerful") },
        {
          value: "depressed",
          label: $t("tts.azure.options.style.depressed"),
        },
        {
          value: "disgruntled",
          label: $t("tts.azure.options.style.disgruntled"),
        },
        { value: "depressed", label: $t("tts.azure.options.style.depressed") },
        { value: "fearful", label: $t("tts.azure.options.style.fearful") },
        {
          value: "narration-relaxed",
          label: $t("tts.azure.options.style.narrationRelaxed"),
        },
        { value: "newscast", label: $t("tts.azure.options.style.newscast") },
        { value: "sad", label: $t("tts.azure.options.style.sad") },
        { value: "serious", label: $t("tts.azure.options.style.serious") },
      ],
      roles: [
        { value: "Boy", label: $t("tts.azure.options.role.boy") },
        { value: "Narrator", label: $t("tts.azure.options.role.narrator") },
        {
          value: "YoungAdultMale",
          label: $t("tts.azure.options.role.youngAdultMale"),
        },
      ],
    },
    {
      value: "zh-CN-YunyangNeural",
      label: $t("tts.azure.options.speaker.yunyang"),
      styles: [
        {
          value: "customerservice",
          label: $t("tts.azure.options.style.customerservice"),
        },
        {
          value: "narration-professional",
          label: $t("tts.azure.options.style.narrationProfessional"),
        },
        {
          value: "newscast-casual",
          label: $t("tts.azure.options.style.newscastCasual"),
        },
      ],
    },
    {
      value: "zh-CN-YunfengNeural",
      label: $t("tts.azure.options.speaker.yunfeng"),
      styles: [
        { value: "angry", label: $t("tts.azure.options.style.angry") },
        { value: "cheerful", label: $t("tts.azure.options.style.cheerful") },
        { value: "depressed", label: $t("tts.azure.options.style.depressed") },
        {
          value: "disgruntled",
          label: $t("tts.azure.options.style.disgruntled"),
        },
        { value: "fearful", label: $t("tts.azure.options.style.fearful") },
        { value: "sad", label: $t("tts.azure.options.style.sad") },
        { value: "serious", label: $t("tts.azure.options.style.serious") },
      ],
    },
    {
      value: "zh-CN-YunhaoNeural",
      label: $t("tts.azure.options.speaker.yunhao"),
      styles: [
        {
          value: "advertisement-upbeat",
          label: $t("tts.azure.options.style.advertisementUpbeat"),
        },
      ],
    },
    {
      value: "zh-CN-YunjianNeural",
      label: $t("tts.azure.options.speaker.yunjian"),
      styles: [
        { value: "angry", label: $t("tts.azure.options.style.angry") },
        { value: "cheerful", label: $t("tts.azure.options.style.cheerful") },
        { value: "depressed", label: $t("tts.azure.options.style.depressed") },
        {
          value: "disgruntled",
          label: $t("tts.azure.options.style.disgruntled"),
        },
        {
          value: "documentary-narration",
          label: $t("tts.azure.options.style.documentaryNarration"),
        },
        {
          value: "narration-relaxed",
          label: $t("tts.azure.options.style.narrationRelaxed"),
        },
        { value: "sad", label: $t("tts.azure.options.style.sad") },
        { value: "serious", label: $t("tts.azure.options.style.serious") },
        {
          value: "sports-commentary",
          label: $t("tts.azure.options.style.sportsCommentary"),
        },
        {
          value: "sports-commentary-excited",
          label: $t("tts.azure.options.style.sportsCommentaryExcited"),
        },
      ],
    },
    {
      value: "zh-CN-YunxiaNeural",
      label: $t("tts.azure.options.speaker.yunxia"),
      styles: [
        { value: "angry", label: $t("tts.azure.options.style.angry") },
        { value: "calm", label: $t("tts.azure.options.style.calm") },
        { value: "cheerful", label: $t("tts.azure.options.style.cheerful") },
        { value: "fearful", label: $t("tts.azure.options.style.fearful") },
        { value: "sad", label: $t("tts.azure.options.style.sad") },
      ],
    },
    {
      value: "zh-CN-XiaoyiNeural",
      label: $t("tts.azure.options.speaker.xiaoyi"),
      styles: [
        {
          value: "affectionate",
          label: $t("tts.azure.options.style.affectionate"),
        },
        { value: "angry", label: $t("tts.azure.options.style.angry") },
        { value: "cheerful", label: $t("tts.azure.options.style.cheerful") },
        {
          value: "disgruntled",
          label: $t("tts.azure.options.style.disgruntled"),
        },
        {
          value: "embarrassed",
          label: $t("tts.azure.options.style.embarrassed"),
        },
        { value: "fearful", label: $t("tts.azure.options.style.fearful") },
        { value: "gentle", label: $t("tts.azure.options.style.gentle") },
        { value: "sad", label: $t("tts.azure.options.style.sad") },
        { value: "serious", label: $t("tts.azure.options.style.serious") },
      ],
    },
    {
      value: "zh-CN-XiaozhenNeural",
      label: $t("tts.azure.options.speaker.xiaozhen"),
      styles: [
        { value: "angry", label: $t("tts.azure.options.style.angry") },
        { value: "cheerful", label: $t("tts.azure.options.style.cheerful") },
        {
          value: "disgruntled",
          label: $t("tts.azure.options.style.disgruntled"),
        },
        { value: "fearful", label: $t("tts.azure.options.style.fearful") },
        { value: "sad", label: $t("tts.azure.options.style.sad") },
        { value: "serious", label: $t("tts.azure.options.style.serious") },
      ],
    },
    {
      value: "zh-CN-YunzeNeural",
      label: $t("tts.azure.options.speaker.yunze"),
      styles: [
        { value: "angry", label: $t("tts.azure.options.style.angry") },
        { value: "calm", label: $t("tts.azure.options.style.calm") },
        { value: "cheerful", label: $t("tts.azure.options.style.cheerful") },
        { value: "depressed", label: $t("tts.azure.options.style.depressed") },
        {
          value: "disgruntled",
          label: $t("tts.azure.options.style.disgruntled"),
        },
        {
          value: "documentary-narration",
          label: $t("tts.azure.options.style.documentaryNarration"),
        },
        { value: "fearful", label: $t("tts.azure.options.style.fearful") },
        { value: "sad", label: $t("tts.azure.options.style.sad") },
        { value: "serious", label: $t("tts.azure.options.style.serious") },
      ],
      roles: [
        {
          value: "OlderAdultMale",
          label: $t("tts.azure.options.role.olderAdultMale"),
        },
        { value: "SeniorMale", label: $t("tts.azure.options.role.seniorMale") },
      ],
    },
    {
      value: "zh-CN-XiaochenNeural",
      label: $t("tts.azure.options.speaker.xiaochen"),
      styles: [
        {
          value: "livecommercial",
          label: $t("tts.azure.options.style.livecommercial"),
        },
      ],
    },
    {
      value: "zh-CN-XiaohanNeural",
      label: $t("tts.azure.options.speaker.xiaohan"),
      styles: [
        {
          value: "affectionate",
          label: $t("tts.azure.options.style.affectionate"),
        },
        { value: "angry", label: $t("tts.azure.options.style.angry") },
        { value: "calm", label: $t("tts.azure.options.style.calm") },
        { value: "cheerful", label: $t("tts.azure.options.style.cheerful") },
        {
          value: "disgruntled",
          label: $t("tts.azure.options.style.disgruntled"),
        },
        {
          value: "embarrassed",
          label: $t("tts.azure.options.style.embarrassed"),
        },
        { value: "fearful", label: $t("tts.azure.options.style.fearful") },
        { value: "gentle", label: $t("tts.azure.options.style.gentle") },
        { value: "sad", label: $t("tts.azure.options.style.sad") },
        { value: "serious", label: $t("tts.azure.options.style.serious") },
      ],
    },
    {
      value: "zh-CN-XiaomengNeural",
      label: $t("tts.azure.options.speaker.xiaomeng"),
      styles: [{ value: "chat", label: $t("tts.azure.options.style.chat") }],
    },
    {
      value: "zh-CN-XiaoruiNeural",
      label: $t("tts.azure.options.speaker.xiaorui"),
      styles: [
        { value: "angry", label: $t("tts.azure.options.style.angry") },
        { value: "calm", label: $t("tts.azure.options.style.calm") },
        { value: "fearful", label: $t("tts.azure.options.style.fearful") },
        { value: "sad", label: $t("tts.azure.options.style.sad") },
      ],
    },
    {
      value: "zh-CN-XiaoshuangNeural",
      label: $t("tts.azure.options.speaker.xiaoshuang"),
      styles: [{ value: "chat", label: $t("tts.azure.options.style.chat") }],
    },
  ],
}));
