import { computed, type ComputedRef } from "vue";
import { $t } from "../locales";
import * as languages from "./options/languages";

export type SpeakerOption = {
  value: string;
  label: string;
  styles: { value: string; label: string }[];
  roles?: { value: string; label: string }[];
};

export type LanguageOption = {
  value: string;
  label: string;
  speakers: SpeakerOption[];
};

export const languageOptions = computed(() => languages.languageOrder.map(
  (key) => {
    const language = languages[key as keyof typeof languages];
    return (language as ComputedRef<LanguageOption>).value;
  }
));

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
