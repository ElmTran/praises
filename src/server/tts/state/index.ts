export enum Provider {
  azure = "azure",
  edge = "edge",
  native = "native",
  tiktok = "tiktok",
  windows = "windows",
}

export interface State {
  provider: Provider;
  azure?: {
    apiKey: string;
    region: string;
    language: string;
    speaker: string;
    style: string;
    rate: number;
    pitch: number;
  };
  edge?: {
    language: string;
    speaker: string;
    style: string;
    rate: number;
    pitch: number;
  };
  native?: {
    voice: string;
    pitch: number;
    rate: number;
    volume: number;
  };
  tiktok?: {
    device: string;
    voice: string;
    volume: number;
    rate: number;
  };
  windows: {
    device: string;
    voice: string;
    volume: number;
    rate: number;
  };
}
