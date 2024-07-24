export type SpeakerOption = {
  value: string;
  label: string;
  styles: { value: string; label: string }[];
  roles?: { value: string; label: string }[];
};

export const speakerOptions: SpeakerOption[] = [
  {
    value: "en-US-AriaNeural",
    label: "Aria",
    styles: [
      { value: "chat", label: "Chat" },
      { value: "angry", label: "Angry" },
      { value: "cheerful", label: "Cheerful" },
      { value: "customerservice", label: "Customer Service" },
      { value: "empathetic", label: "Empathetic" },
      { value: "excited", label: "Excited" },
      { value: "friendly", label: "Friendly" },
      { value: "hopeful", label: "Hopeful" },
      { value: "narration - professional", label: "Narration - Professional" },
      { value: "newscast - casual", label: "Newscast - Casual" },
      { value: "newscast - formal", label: "Newscast - Formal" },
      { value: "sad", label: "Sad" },
      { value: "shouting", label: "Shouting" },
      { value: "terrified", label: "Terrified" },
      { value: "unfriendly", label: "Unfriendly" },
      { value: "whispering", label: "Whispering" },
    ],
  },
  {
    value: "en-US-DavisNeural",
    label: "Davis",
    styles: [
      { value: "chat", label: "Chat" },
      { value: "angry", label: "Angry" },
      { value: "cheerful", label: "Cheerful" },
      { value: "excited", label: "Excited" },
      { value: "friendly", label: "Friendly" },
      { value: "hopeful", label: "Hopeful" },
      { value: "sad", label: "Sad" },
      { value: "shouting", label: "Shouting" },
      { value: "terrified", label: "Terrified" },
      { value: "unfriendly", label: "Unfriendly" },
      { value: "whispering", label: "Whispering" },
    ],
  },
  {
    value: "en-US-GuyNeural",
    label: "Guy",
    styles: [
      { value: "chat", label: "Chat" },
      { value: "angry", label: "Angry" },
      { value: "cheerful", label: "Cheerful" },
      { value: "excited", label: "Excited" },
      { value: "friendly", label: "Friendly" },
      { value: "hopeful", label: "Hopeful" },
      { value: "narration - professional", label: "Narration - Professional" },
      { value: "newscast - casual", label: "Newscast - Casual" },
      { value: "newscast - formal", label: "Newscast - Formal" },
      { value: "sad", label: "Sad" },
      { value: "shouting", label: "Shouting" },
      { value: "terrified", label: "Terrified" },
      { value: "unfriendly", label: "Unfriendly" },
      { value: "whispering", label: "Whispering" },
    ],
  },
  {
    value: "zh-CN-XiaoxiaoNeural",
    label: "Xiaoxiao",
    styles: [
      { value: "affectionate", label: "Affectionate" },
      { value: "angry", label: "Angry" },
      { value: "assistant", label: "Assistant" },
      { value: "calm", label: "Calm" },
      { value: "chat", label: "Chat" },
      { value: "chat - casual", label: "Chat - Casual" },
      { value: "cheerful", label: "Cheerful" },
      { value: "customerservice", label: "Customer Service" },
      { value: "disgruntled", label: "Disgruntled" },
      { value: "fearful", label: "Fearful" },
      { value: "friendly", label: "Friendly" },
      { value: "gentle", label: "Gentle" },
      { value: "lyrical", label: "Lyrical" },
      { value: "newscast", label: "Newscast" },
      { value: "poetry - reading", label: "Poetry - Reading" },
      { value: "sad", label: "Sad" },
      { value: "serious", label: "Serious" },
      { value: "sorry", label: "Sorry" },
      { value: "whisper", label: "Whisper" },
    ],
  },
  {
    value: "zh-CN-XiaomoNeural",
    label: "Xiaomo",
    styles: [
      { value: "affectionate", label: "Affectionate" },
      { value: "angry", label: "Angry" },
      { value: "calm", label: "Calm" },
      { value: "cheerful", label: "Cheerful" },
      { value: "depressed", label: "Depressed" },
      { value: "disgruntled", label: "Disgruntled" },
      { value: "embarrassed", label: "Embarrassed" },
      { value: "envious", label: "Envious" },
      { value: "fearful", label: "Fearful" },
      { value: "gentle", label: "Gentle" },
      { value: "sad", label: "Sad" },
      { value: "serious", label: "Serious" },
    ],
    roles: [
      { value: "Boy", label: "Boy" },
      { value: "Girl", label: "Girl" },
      { value: "OlderAdultFemale", label: "OlderAdultFemale" },
      { value: "OlderAdultMale", label: "OlderAdultMale" },
      { value: "SeniorFemale", label: "SeniorFemale" },
      { value: "SeniorMale", label: "SeniorMale" },
      { value: "YoungAdultFemale", label: "YoungAdultFemale" },
      { value: "YoungAdultMale", label: "YoungAdultMale" },
    ],
  },
  {
    value: "zh-CN-YunyeNeural",
    label: "Yunye",
    styles: [
      { value: "angry", label: "Angry" },
      { value: "calm", label: "Calm" },
      { value: "cheerful", label: "Cheerful" },
      { value: "disgruntled", label: "Disgruntled" },
      { value: "embarrassed", label: "Embarrassed" },
      { value: "fearful", label: "Fearful" },
      { value: "sad", label: "Sad" },
      { value: "serious", label: "Serious" },
    ],
    roles: [
      { value: "Boy", label: "Boy" },
      { value: "Girl", label: "Girl" },
      { value: "OlderAdultFemale", label: "OlderAdultFemale" },
      { value: "OlderAdultMale", label: "OlderAdultMale" },
      { value: "SeniorFemale", label: "SeniorFemale" },
      { value: "SeniorMale", label: "SeniorMale" },
      { value: "YoungAdultFemale", label: "YoungAdultFemale" },
      { value: "YoungAdultMale", label: "YoungAdultMale" },
    ],
  },
  {
    value: "ja-JP-NanamiNeural",
    label: "Nanami",
    styles: [
      { value: "chat", label: "Chat" },
      { value: "cheerful", label: "Cheerful" },
      { value: "customerservice", label: "Customer Service" },
    ],
  },
];

type LanguageOption = {
  value: string;
  label: string;
  speakers: SpeakerOption[];
};

export const languageOptions: LanguageOption[] = [
  {
    value: "en-US",
    label: "English",
    speakers: speakerOptions.filter((s) => s.value.startsWith("en-US")),
  },
  {
    value: "zh-CN",
    label: "Chinese",
    speakers: speakerOptions.filter((s) => s.value.startsWith("zh-CN")),
  },
  {
    value: "ja-JP",
    label: "Japanese",
    speakers: speakerOptions.filter((s) => s.value.startsWith("ja-JP")),
  },
];
