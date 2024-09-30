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
    label: $t("tts.azure.options.language.en"),
    speakers: [
      {
        value: "en-US-AriaNeural",
        label: $t("tts.azure.options.speaker.aria"),
        styles: [
          { value: "chat", label: $t("tts.azure.options.style.chat") },
          { value: "angry", label: $t("tts.azure.options.style.angry") },
          { value: "cheerful", label: $t("tts.azure.options.style.cheerful") },
          {
            value: "customerservice",
            label: $t("tts.azure.options.style.customerservice"),
          },
          {
            value: "empathetic",
            label: $t("tts.azure.options.style.empathetic"),
          },
          { value: "excited", label: $t("tts.azure.options.style.excited") },
          { value: "friendly", label: $t("tts.azure.options.style.friendly") },
          { value: "hopeful", label: $t("tts.azure.options.style.hopeful") },
          {
            value: "narration - professional",
            label: $t("tts.azure.options.style.narrationProfessional"),
          },
          {
            value: "newscast - casual",
            label: $t("tts.azure.options.style.newscastCasual"),
          },
          {
            value: "newscast - formal",
            label: $t("tts.azure.options.style.newscastFormal"),
          },
          { value: "sad", label: $t("tts.azure.options.style.sad") },
          { value: "shouting", label: $t("tts.azure.options.style.shouting") },
          {
            value: "terrified",
            label: $t("tts.azure.options.style.terrified"),
          },
          {
            value: "unfriendly",
            label: $t("tts.azure.options.style.unfriendly"),
          },
          {
            value: "whispering",
            label: $t("tts.azure.options.style.whispering"),
          },
        ],
      },
      {
        value: "en-US-DavisNeural",
        label: $t("tts.azure.options.speaker.davis"),
        styles: [
          { value: "chat", label: $t("tts.azure.options.style.chat") },
          { value: "angry", label: $t("tts.azure.options.style.angry") },
          { value: "cheerful", label: $t("tts.azure.options.style.cheerful") },
          { value: "excited", label: $t("tts.azure.options.style.excited") },
          { value: "friendly", label: $t("tts.azure.options.style.friendly") },
          { value: "hopeful", label: $t("tts.azure.options.style.hopeful") },
          { value: "sad", label: $t("tts.azure.options.style.sad") },
          { value: "shouting", label: $t("tts.azure.options.style.shouting") },
          {
            value: "terrified",
            label: $t("tts.azure.options.style.terrified"),
          },
          {
            value: "unfriendly",
            label: $t("tts.azure.options.style.unfriendly"),
          },
          {
            value: "whispering",
            label: $t("tts.azure.options.style.whispering"),
          },
        ],
      },
      {
        value: "en-US-GuyNeural",
        label: $t("tts.azure.options.speaker.guy"),
        styles: [
          { value: "chat", label: $t("tts.azure.options.style.chat") },
          { value: "angry", label: $t("tts.azure.options.style.angry") },
          { value: "cheerful", label: $t("tts.azure.options.style.cheerful") },
          { value: "excited", label: $t("tts.azure.options.style.excited") },
          { value: "friendly", label: $t("tts.azure.options.style.friendly") },
          { value: "hopeful", label: $t("tts.azure.options.style.hopeful") },
          {
            value: "narration - professional",
            label: $t("tts.azure.options.style.narrationProfessional"),
          },
          {
            value: "newscast - casual",
            label: $t("tts.azure.options.style.newscastCasual"),
          },
          {
            value: "newscast - formal",
            label: $t("tts.azure.options.style.newscastFormal"),
          },
          { value: "sad", label: $t("tts.azure.options.style.sad") },
          { value: "shouting", label: $t("tts.azure.options.style.shouting") },
          {
            value: "terrified",
            label: $t("tts.azure.options.style.terrified"),
          },
          {
            value: "unfriendly",
            label: $t("tts.azure.options.style.unfriendly"),
          },
          {
            value: "whispering",
            label: $t("tts.azure.options.style.whispering"),
          },
        ],
      },
    ],
  },
  {
    value: "zh-CN",
    label: $t("tts.azure.options.language.zh"),
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
    ],
  },
  {
    value: "ja-JP",
    label: $t("tts.azure.options.language.ja"),
    speakers: [
      {
        value: "ja-JP-NanamiNeural",
        label: $t("tts.azure.options.speaker.nanami"),
        styles: [
          { value: "chat", label: $t("tts.azure.options.style.chat") },
          { value: "cheerful", label: $t("tts.azure.options.style.cheerful") },
          {
            value: "customerservice",
            label: $t("tts.azure.options.style.customerservice"),
          },
        ],
      },
    ],
  },
]);

type TiktokLanguageOption = {
  value: string;
  label: string;
  speakers: { value: string; label: string }[];
};

export const tiktokLanguageOptions: ComputedRef<TiktokLanguageOption[]> =
  computed(() => [
    {
      value: "en_us",
      label: $t("tts.tiktok.options.language.en_us"),
      speakers: [
        { value: "en_us_001", label: $t("tts.tiktok.options.voice.female") },
        { value: "en_us_006", label: $t("tts.tiktok.options.voice.male1") },
        { value: "en_us_007", label: $t("tts.tiktok.options.voice.male2") },
        { value: "en_us_009", label: $t("tts.tiktok.options.voice.male3") },
        { value: "en_us_010", label: $t("tts.tiktok.options.voice.male4") },
      ],
    },
    {
      value: "en_uk",
      label: $t("tts.tiktok.options.language.en_uk"),
      speakers: [
        { value: "en_uk_001", label: $t("tts.tiktok.options.voice.male1") },
        { value: "en_uk_003", label: $t("tts.tiktok.options.voice.male2") },
      ],
    },
    {
      value: "en_au",
      label: $t("tts.tiktok.options.language.en_au"),
      speakers: [
        { value: "en_au_001", label: $t("tts.tiktok.options.voice.female") },
        { value: "en_au_002", label: $t("tts.tiktok.options.voice.male") },
      ],
    },
    {
      value: "fr",
      label: $t("tts.tiktok.options.language.fr"),
      speakers: [
        { value: "fr_001", label: $t("tts.tiktok.options.voice.male1") },
        { value: "fr_002", label: $t("tts.tiktok.options.voice.male2") },
      ],
    },
    {
      value: "de",
      label: $t("tts.tiktok.options.language.de"),
      speakers: [
        { value: "de_001", label: $t("tts.tiktok.options.voice.female") },
        { value: "de_002", label: $t("tts.tiktok.options.voice.male") },
      ],
    },
    {
      value: "es",
      label: $t("tts.tiktok.options.language.es"),
      speakers: [
        { value: "es_002", label: $t("tts.tiktok.options.voice.male") },
      ],
    },
    {
      value: "es_mx",
      label: $t("tts.tiktok.options.language.es_mx"),
      speakers: [
        { value: "es_mx_002", label: $t("tts.tiktok.options.voice.male1") },
        { value: "es_male_m3", label: $t("tts.tiktok.options.voice.male2") },
        {
          value: "es_female_f6",
          label: $t("tts.tiktok.options.voice.female1"),
        },
        {
          value: "es_female_fp1",
          label: $t("tts.tiktok.options.voice.female2"),
        },
        {
          value: "es_mx_female_supermom",
          label: $t("tts.tiktok.options.voice.female3"),
        },
      ],
    },
    {
      value: "br",
      label: $t("tts.tiktok.options.language.br"),
      speakers: [
        { value: "br_003", label: $t("tts.tiktok.options.voice.female2") },
        { value: "br_004", label: $t("tts.tiktok.options.voice.female3") },
        { value: "br_005", label: $t("tts.tiktok.options.voice.male") },
      ],
    },
    {
      value: "id",
      label: $t("tts.tiktok.options.language.id"),
      speakers: [
        { value: "id_001", label: $t("tts.tiktok.options.voice.female") },
      ],
    },
    {
      value: "jp",
      label: $t("tts.tiktok.options.language.jp"),
      speakers: [
        { value: "jp_001", label: $t("tts.tiktok.options.voice.female1") },
        { value: "jp_003", label: $t("tts.tiktok.options.voice.female2") },
        { value: "jp_005", label: $t("tts.tiktok.options.voice.female3") },
        { value: "jp_006", label: $t("tts.tiktok.options.voice.male") },
      ],
    },
    {
      value: "kr",
      label: $t("tts.tiktok.options.language.kr"),
      speakers: [
        { value: "kr_002", label: $t("tts.tiktok.options.voice.male1") },
        { value: "kr_004", label: $t("tts.tiktok.options.voice.male2") },
        { value: "kr_003", label: $t("tts.tiktok.options.voice.female") },
      ],
    },
    {
      value: "characters",
      label: $t("tts.tiktok.options.language.characters"),
      speakers: [
        {
          value: "en_us_ghostface",
          label: $t("tts.tiktok.options.voice.ghostface"),
        },
        {
          value: "en_us_chewbacca",
          label: $t("tts.tiktok.options.voice.chewbacca"),
        },
        { value: "en_us_c3po", label: $t("tts.tiktok.options.voice.c3po") },
        {
          value: "en_us_stitch",
          label: $t("tts.tiktok.options.voice.stitch"),
        },
        {
          value: "en_us_stormtrooper",
          label: $t("tts.tiktok.options.voice.stormtrooper"),
        },
        {
          value: "en_us_rocket",
          label: $t("tts.tiktok.options.voice.rocket"),
        },
      ],
    },
    {
      value: "singing",
      label: $t("tts.tiktok.options.language.singing"),
      speakers: [
        {
          value: "en_female_f08_salut_damour",
          label: $t("tts.tiktok.options.voice.alto"),
        },
        {
          value: "en_male_m03_lobby",
          label: $t("tts.tiktok.options.voice.tenor"),
        },
        {
          value: "en_male_m03_sunshine_soon",
          label: $t("tts.tiktok.options.voice.sunshineSoon"),
        },
        {
          value: "en_female_f08_warmy_breeze",
          label: $t("tts.tiktok.options.voice.warmyBreeze"),
        },
        {
          value: "en_female_ht_f08_glorious",
          label: $t("tts.tiktok.options.voice.glorious"),
        },
        {
          value: "en_male_sing_funny_it_goes_up",
          label: $t("tts.tiktok.options.voice.itGoesUp"),
        },
        {
          value: "en_male_m2_xhxs_m03_silly",
          label: $t("tts.tiktok.options.voice.chipmunk"),
        },
        {
          value: "en_female_ht_f08_wonderful_world",
          label: $t("tts.tiktok.options.voice.dramatic"),
        },
      ],
    },
  ]);
