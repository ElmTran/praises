import {
  SpeechConfig,
  SpeechSynthesisOutputFormat,
  SpeechSynthesizer,
} from "microsoft-cognitiveservices-speech-sdk";

import type { TTSReceiver, TTSService } from "../types";
import type { State } from "../state";
import { isEmptyValue } from "@/utils";

export class AzureTTSService implements TTSService {
  constructor(private bindings: TTSReceiver) {}

  #instance?: SpeechSynthesizer;

  start(state: State): void {
    if (Object.values(state).some(isEmptyValue))
      return this.bindings.onEnd("Options missing");

    try {
      // const audioConfig                     = AudioConfig.fromSpeakerOutput(p);
      const speechConfig = SpeechConfig.fromSubscription(
        state.azure.key,
        state.azure.region
      );
      speechConfig.speechSynthesisLanguage = state.azure.language;
      speechConfig.speechSynthesisVoiceName = state.azure.speaker;
      speechConfig.speechSynthesisOutputFormat =
        SpeechSynthesisOutputFormat.Audio48Khz192KBitRateMonoMp3;
      this.#instance = new SpeechSynthesizer(speechConfig, null as any);

      this.bindings.onStart();
    } catch (error: any) {
      this.bindings.onEnd(error?.message as string);
    }
  }

  play(value: string): void {
    const ssml = `
    <speak version="1.0" xmlns="https://www.w3.org/2001/10/synthesis" xml:lang="en-US">
      <voice name="${this.state.voice}" ${this.state.voiceStyle ? `style="${this.state.voiceStyle}"` : ""} ${this.state.voiceRole ? `role="${this.state.voiceRole}"` : ""}>
      <prosody volume="${this.state.voiceVolume || "default"}" rate="${this.state.voiceRate || "default"}" pitch="${this.state.voicePitch || "default"}" range="${this.state.voiceRange || "default"}">
        ${value}
      </prosody>
      </voice>
    </speak>
    `;
    value &&
      this.#instance?.speakSsmlAsync(
        ssml,
        (result) => {
          window.ApiServer.sound.enqueueVoiceClip(result.audioData, {
            volume: parseFloat(this.state.volume) ?? 1,
            rate: parseFloat(this.state.rate) ?? 1,
            device_name: this.state.device,
          });
        },
        (e) => {
          this.#instance?.close();
          this.bindings.onEnd(e);
        }
      );
  }
  stop(): void {
    this.#instance?.close();
    this.bindings.onEnd();
  }

  dispose(): void {}
}
