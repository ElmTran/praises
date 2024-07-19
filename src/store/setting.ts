import { reactive } from "vue";
import { defineStore } from "pinia";
import { configStore } from "./config.ts";

export const useSettingStore = defineStore("setting", () => {
  const azure = reactive({
    region: "",
    subscription: "",
  });
  async function load() {
    const endpoint: string | null =
      await configStore.value.get("azure.endpoint");
    console.log(endpoint);
    azure.region = endpoint?.split(".")[0].split("https://")[1] || "";
    azure.subscription =
      (await configStore.value.get("azure.subscription")) || "";
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

  return { azure, load, setAzureEndpoint, setAzureSubscription };
});
