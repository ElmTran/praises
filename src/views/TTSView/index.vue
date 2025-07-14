<script setup lang="ts">
import { reactive, watch } from "vue";
import AzureForm from "./components/AzureForm.vue";
import TikTokForm from "./components/TikTokForm.vue";
import QwenForm from "./components/QwenForm.vue";
import FormButton from "./components/FormButton.vue";
import { useTtsStore } from "../../store/tts";
import { storeToRefs } from "pinia";
import { listen } from "@tauri-apps/api/event";
import router from "../../router";
import { $t } from "../../locales";

const ttsStore = useTtsStore();
const { state } = storeToRefs(ttsStore);
const services = reactive([
  { value: "msedge", label: "Microsoft Edge" },
  { value: "azure", label: "Azure" },
  { value: "tiktok", label: "TikTok" },
  { value: "qwen", label: $t("tts.qwen.qwen") },
]);

const ssmlTemplate = `
<speak version="1.0" xmlns="http://www.w3.org/2001/10/synthesis"
       xmlns:mstts="http://www.w3.org/2001/mstts" xml:lang="en-US">
    <voice name="en-US-JennyNeural">
        Hello World!
    </voice>
</speak>`;

watch(
  () => state.value.ssml,
  (newValue) => {
    if (newValue) {
      if (!state.value.text.trim()) {
        state.value.text = ssmlTemplate;
      }
    } else {
      state.value.text = "";
    }
  },
);

watch(
  () => state.value.service,
  (newValue) => {
    if (newValue === "qwen") {
      state.value.model = "qwen-tts-latest";
      state.value.speaker = "Chelsie";
    }
  },
);

const forms: {
  [key: string]: typeof AzureForm | typeof TikTokForm | typeof QwenForm;
} = {
  azure: AzureForm,
  msedge: AzureForm, // AzureForm is used for both Azure and Edge
  tiktok: TikTokForm,
  qwen: QwenForm,
};

listen("Navigate", ({ payload }) => {
  router.push(payload as string);
});

listen("PlayAudio", ({ payload }) => {
  ttsStore.state.text = payload as string;
  ttsStore.convert();
});
</script>
<template>
  <el-main class="main">
    <el-row :gutter="10" class="main-container">
      <el-col :span="16">
        <div class="textarea-container">
          <textarea id="textarea" v-model="state.text" name="textarea" />
          <div class="textarea-footer">
            <el-switch
              v-model="state.ssml"
              class="ssml-switch"
              inline-prompt
              active-text="SSML"
              inactive-text="Text"
            />
          </div>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="form-container">
          <el-select
            v-model="state.service"
            placeholder="Please select service"
            class="service-select"
          >
            <el-option
              v-for="item in services"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
          <component :is="forms[state.service]" />
          <FormButton />
        </div>
      </el-col>
    </el-row>
  </el-main>
  <Footer />
</template>

<style scoped lang="scss">
.main {
  padding: 5px 20px;
}
.main-container {
  height: 100%;
  .textarea-container {
    height: 100%;
    padding: 0 10px;
    display: flex;
    flex-direction: column;

    .textarea-footer {
      margin-bottom: 10px;
      display: flex;
      justify-content: flex-end;

      .ssml-switch {
        margin-right: 10px;
        --el-switch-on-color: #ca5e9b;
        --el-switch-off-color: #414141;
      }
    }
    textarea {
      border-radius: 8px;
      width: 100%;
      height: 450px;
      resize: none;
      color: #fff;
      border: 1px solid #414141;
      background-color: transparent;
      font-family: inherit;
      padding: 12px 16px;
      box-sizing: border-box; // make padding included in width
    }
    textarea:focus {
      outline: none;
      border: 1px solid rgba(202, 94, 155, 0.7);
      box-shadow: rgba(245, 73, 145, 0.2) 0px 0px 0px 1px;
    }
  }
  .form-container {
    display: flex;
    flex-direction: column;
    height: 100%;
    :deep(.el-select__wrapper) {
      padding: 0.8rem 1rem;
    }
    .service-select {
      margin: 0.6rem 0 1rem;
    }
  }
}
</style>
