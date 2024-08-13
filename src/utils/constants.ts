import { computed, type ComputedRef } from "vue";
import { $t } from "../locales";
export type SpeakerOption = {
  value: string;
  label: string;
  styles: { value: string; label: string }[];
  roles?: { value: string; label: string }[];
};

type LanguageOption = {
  value: string;
  label: string;
  speakers: SpeakerOption[];
};

export const languageOptions: ComputedRef<LanguageOption[]> = computed(() => [
  {
    value: "en-US",
    label: $t("tts.form.options.language.en"),
    speakers: [
      {
        value: "en-US-AriaNeural",
        label: $t("tts.form.options.speaker.aria"),
        styles: [
          { value: "chat", label: $t("tts.form.options.style.chat") },
          { value: "angry", label: $t("tts.form.options.style.angry") },
          { value: "cheerful", label: $t("tts.form.options.style.cheerful") },
          {
            value: "customerservice",
            label: $t("tts.form.options.style.customerservice"),
          },
          {
            value: "empathetic",
            label: $t("tts.form.options.style.empathetic"),
          },
          { value: "excited", label: $t("tts.form.options.style.excited") },
          { value: "friendly", label: $t("tts.form.options.style.friendly") },
          { value: "hopeful", label: $t("tts.form.options.style.hopeful") },
          {
            value: "narration - professional",
            label: $t("tts.form.options.style.narrationProfessional"),
          },
          {
            value: "newscast - casual",
            label: $t("tts.form.options.style.newscastCasual"),
          },
          {
            value: "newscast - formal",
            label: $t("tts.form.options.style.newscastFormal"),
          },
          { value: "sad", label: $t("tts.form.options.style.sad") },
          { value: "shouting", label: $t("tts.form.options.style.shouting") },
          { value: "terrified", label: $t("tts.form.options.style.terrified") },
          {
            value: "unfriendly",
            label: $t("tts.form.options.style.unfriendly"),
          },
          {
            value: "whispering",
            label: $t("tts.form.options.style.whispering"),
          },
        ],
      },
      {
        value: "en-US-DavisNeural",
        label: $t("tts.form.options.speaker.davis"),
        styles: [
          { value: "chat", label: $t("tts.form.options.style.chat") },
          { value: "angry", label: $t("tts.form.options.style.angry") },
          { value: "cheerful", label: $t("tts.form.options.style.cheerful") },
          { value: "excited", label: $t("tts.form.options.style.excited") },
          { value: "friendly", label: $t("tts.form.options.style.friendly") },
          { value: "hopeful", label: $t("tts.form.options.style.hopeful") },
          { value: "sad", label: $t("tts.form.options.style.sad") },
          { value: "shouting", label: $t("tts.form.options.style.shouting") },
          { value: "terrified", label: $t("tts.form.options.style.terrified") },
          {
            value: "unfriendly",
            label: $t("tts.form.options.style.unfriendly"),
          },
          {
            value: "whispering",
            label: $t("tts.form.options.style.whispering"),
          },
        ],
      },
      {
        value: "en-US-GuyNeural",
        label: $t("tts.form.options.speaker.guy"),
        styles: [
          { value: "chat", label: $t("tts.form.options.style.chat") },
          { value: "angry", label: $t("tts.form.options.style.angry") },
          { value: "cheerful", label: $t("tts.form.options.style.cheerful") },
          { value: "excited", label: $t("tts.form.options.style.excited") },
          { value: "friendly", label: $t("tts.form.options.style.friendly") },
          { value: "hopeful", label: $t("tts.form.options.style.hopeful") },
          {
            value: "narration - professional",
            label: $t("tts.form.options.style.narrationProfessional"),
          },
          {
            value: "newscast - casual",
            label: $t("tts.form.options.style.newscastCasual"),
          },
          {
            value: "newscast - formal",
            label: $t("tts.form.options.style.newscastFormal"),
          },
          { value: "sad", label: $t("tts.form.options.style.sad") },
          { value: "shouting", label: $t("tts.form.options.style.shouting") },
          { value: "terrified", label: $t("tts.form.options.style.terrified") },
          {
            value: "unfriendly",
            label: $t("tts.form.options.style.unfriendly"),
          },
          {
            value: "whispering",
            label: $t("tts.form.options.style.whispering"),
          },
        ],
      },
    ],
  },
  {
    value: "zh-CN",
    label: $t("tts.form.options.language.zh"),
    speakers: [
      {
        value: "zh-CN-XiaoxiaoNeural",
        label: $t("tts.form.options.speaker.xiaoxiao"),
        styles: [
          {
            value: "affectionate",
            label: $t("tts.form.options.style.affectionate"),
          },
          { value: "angry", label: $t("tts.form.options.style.angry") },
          { value: "assistant", label: $t("tts.form.options.style.assistant") },
          { value: "calm", label: $t("tts.form.options.style.calm") },
          { value: "chat", label: $t("tts.form.options.style.chat") },
          {
            value: "chat - casual",
            label: $t("tts.form.options.style.chatCasual"),
          },
          { value: "cheerful", label: $t("tts.form.options.style.cheerful") },
          {
            value: "customerservice",
            label: $t("tts.form.options.style.customerservice"),
          },
          {
            value: "disgruntled",
            label: $t("tts.form.options.style.disgruntled"),
          },
          { value: "fearful", label: $t("tts.form.options.style.fearful") },
          { value: "friendly", label: $t("tts.form.options.style.friendly") },
          { value: "gentle", label: $t("tts.form.options.style.gentle") },
          { value: "lyrical", label: $t("tts.form.options.style.lyrical") },
          { value: "newscast", label: $t("tts.form.options.style.newscast") },
          {
            value: "poetry - reading",
            label: $t("tts.form.options.style.poetryReading"),
          },
          { value: "sad", label: $t("tts.form.options.style.sad") },
          { value: "serious", label: $t("tts.form.options.style.serious") },
          { value: "sorry", label: $t("tts.form.options.style.sorry") },
          { value: "whisper", label: $t("tts.form.options.style.whisper") },
        ],
      },
      {
        value: "zh-CN-XiaomoNeural",
        label: $t("tts.form.options.speaker.xiaomo"),
        styles: [
          {
            value: "affectionate",
            label: $t("tts.form.options.style.affectionate"),
          },
          { value: "angry", label: $t("tts.form.options.style.angry") },
          { value: "calm", label: $t("tts.form.options.style.calm") },
          { value: "cheerful", label: $t("tts.form.options.style.cheerful") },
          { value: "depressed", label: $t("tts.form.options.style.depressed") },
          {
            value: "disgruntled",
            label: $t("tts.form.options.style.disgruntled"),
          },
          {
            value: "embarrassed",
            label: $t("tts.form.options.style.embarrassed"),
          },
          { value: "envious", label: $t("tts.form.options.style.envious") },
          { value: "fearful", label: $t("tts.form.options.style.fearful") },
          { value: "gentle", label: $t("tts.form.options.style.gentle") },
          { value: "sad", label: $t("tts.form.options.style.sad") },
          { value: "serious", label: $t("tts.form.options.style.serious") },
        ],
        roles: [
          { value: "Boy", label: $t("tts.form.options.role.boy") },
          { value: "Girl", label: $t("tts.form.options.role.girl") },
          {
            value: "OlderAdultFemale",
            label: $t("tts.form.options.role.olderAdultFemale"),
          },
          {
            value: "OlderAdultMale",
            label: $t("tts.form.options.role.olderAdultMale"),
          },
          {
            value: "SeniorFemale",
            label: $t("tts.form.options.role.seniorFemale"),
          },
          {
            value: "SeniorMale",
            label: $t("tts.form.options.role.seniorMale"),
          },
          {
            value: "YoungAdultFemale",
            label: $t("tts.form.options.role.youngAdultFemale"),
          },
          {
            value: "YoungAdultMale",
            label: $t("tts.form.options.role.youngAdultMale"),
          },
        ],
      },
      {
        value: "zh-CN-YunyeNeural",
        label: $t("tts.form.options.speaker.yunye"),
        styles: [
          { value: "angry", label: $t("tts.form.options.style.angry") },
          { value: "calm", label: $t("tts.form.options.style.calm") },
          { value: "cheerful", label: $t("tts.form.options.style.cheerful") },
          {
            value: "disgruntled",
            label: $t("tts.form.options.style.disgruntled"),
          },
          {
            value: "embarrassed",
            label: $t("tts.form.options.style.embarrassed"),
          },
          { value: "fearful", label: $t("tts.form.options.style.fearful") },
          { value: "sad", label: $t("tts.form.options.style.sad") },
          { value: "serious", label: $t("tts.form.options.style.serious") },
        ],
        roles: [
          { value: "Boy", label: $t("tts.form.options.role.boy") },
          { value: "Girl", label: $t("tts.form.options.role.girl") },
          {
            value: "OlderAdultFemale",
            label: $t("tts.form.options.role.olderAdultFemale"),
          },
          {
            value: "OlderAdultMale",
            label: $t("tts.form.options.role.olderAdultMale"),
          },
          {
            value: "SeniorFemale",
            label: $t("tts.form.options.role.seniorFemale"),
          },
          {
            value: "SeniorMale",
            label: $t("tts.form.options.role.seniorMale"),
          },
          {
            value: "YoungAdultFemale",
            label: $t("tts.form.options.role.youngAdultFemale"),
          },
          {
            value: "YoungAdultMale",
            label: $t("tts.form.options.role.youngAdultMale"),
          },
        ],
      },
    ],
  },
  {
    value: "ja-JP",
    label: $t("tts.form.options.language.ja"),
    speakers: [
      {
        value: "ja-JP-NanamiNeural",
        label: $t("tts.form.options.speaker.nanami"),
        styles: [
          { value: "chat", label: $t("tts.form.options.style.chat") },
          { value: "cheerful", label: $t("tts.form.options.style.cheerful") },
          {
            value: "customerservice",
            label: $t("tts.form.options.style.customerservice"),
          },
        ],
      },
    ],
  },
]);
