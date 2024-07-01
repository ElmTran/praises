export const languageOptions = [
  { value: "en-US", label: "English" },
  { value: "zh-CN", label: "Chinese" },
  { value: "ja-JP", label: "Japanese" },
];

type SpeakerOption = {
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
    value: "ja-JP-NanamiNeural",
    label: "Nanami",
    styles: [
      { value: "chat", label: "Chat" },
      { value: "cheerful", label: "Cheerful" },
      { value: "customerservice", label: "Customer Service" },
    ],
  },
];
