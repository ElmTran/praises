import { reactive, ref } from "vue";
import { defineStore } from "pinia";
import { configStore } from "./config.ts";
import { setupI18n } from "../locales";
import { invoke } from "@tauri-apps/api";
import { unregisterAll } from "@tauri-apps/api/globalShortcut";

type SupportedLanguagesType = "en-US" | "zh-CN";
type TemplateOption = {
  value: {
    language: string;
    speaker: string;
    style: string;
    role: string;
    rate: number;
    pitch: number;
  };
  name: string;
};

export const useSettingStore = defineStore("setting", () => {
  const azure = reactive({
    region: "",
    subscription: "",
  });
  const qwen = reactive({
    apiKey: "",
  });
  const autoplay = ref();
  const ttsTemplate = ref<TemplateOption[]>([]);
  const locale = ref<SupportedLanguagesType>("en-US");
  const listeningKey = ref();

  async function load() {
    const endpoint: string | null =
      await configStore.value.get("azure.endpoint");
    azure.region = endpoint?.split(".")[0].split("https://")[1] || "";
    azure.subscription =
      (await configStore.value.get("azure.subscription")) || "";
    qwen.apiKey = (await configStore.value.get("qwen.api_key")) || "";
    autoplay.value = await configStore.value.get("tts.autoplay");
    ttsTemplate.value = (await configStore.value.get("tts.template")) || [];
    locale.value = (await configStore.value.get("locale")) || "en-US";
    await setupI18n({ defaultLocale: locale.value });
    listeningKey.value =
      (await configStore.value.get("hotkey_listen_to_selection")) || "";
  }

  async function setAzureEndpoint() {
    await configStore.value.set(
      "azure.endpoint",
      `https://${azure.region}.tts.speech.microsoft.com/cognitiveservices/v1`,
    );
    await configStore.value.save();
  }

  async function setAzureSubscription() {
    await configStore.value.set("azure.subscription", azure.subscription);
    await configStore.value.save();
  }

  async function setQwenApiKey() {
    await configStore.value.set("qwen.api_key", qwen.apiKey);
    await configStore.value.save();
  }

  async function setAutoplay() {
    await configStore.value.set("tts.autoplay", autoplay.value);
    await configStore.value.save();
  }

  async function setTtsTemplate(template: TemplateOption) {
    ttsTemplate.value.push(template);
    await configStore.value.set("tts.template", ttsTemplate.value);
    await configStore.value.save();
  }

  async function setlocale() {
    await configStore.value.set("locale", locale.value);
    await configStore.value.save();
    setupI18n({ defaultLocale: locale.value });
  }

  async function setListeningKey() {
    await configStore.value.set("hotkey_listen_to_selection", listeningKey.value);
    await configStore.value.save();
    unregisterAll();
    await invoke("register_hotkey", { shortcut: listeningKey.value });
  }

  return {
    azure,
    qwen,
    autoplay,
    ttsTemplate,
    locale,
    listeningKey,
    load,
    setAzureEndpoint,
    setAzureSubscription,
    setQwenApiKey,
    setAutoplay,
    setTtsTemplate,
    setlocale,
    setListeningKey,
  };
});
