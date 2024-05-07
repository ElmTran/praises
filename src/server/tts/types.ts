import type { State } from "./state";

export interface TTSReceiver {
  onStart(): void;
  onEnd(error?: string): void;
  onFilePlayRequest(data: ArrayBuffer, options?: Record<string, any>): void;
}
export interface TTSService {
  start(params: State): void;
  stop(): void;
  play(value: string): void;
  dispose(): void;
}

export interface TTSServiceConstructor {
  new (receiver: TTSReceiver): TTSService;
}
