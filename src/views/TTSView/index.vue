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
  flex: 1;
  min-height: 0;
  padding: 18px 20px 8px;
  overflow: hidden;
}

.main-container {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(330px, 360px);
  gap: 12px;
  height: 100%;
  min-height: 0;
  margin-left: 0 !important;
  margin-right: 0 !important;

  :deep(.el-col) {
    display: block;
    flex: initial;
    max-width: none;
    min-width: 0;
    padding-left: 0 !important;
    padding-right: 0 !important;
  }

  .textarea-container {
    height: 100%;
    min-height: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 10px;

    .textarea-footer {
      display: flex;
      justify-content: flex-end;

      .ssml-switch {
        margin-right: 0;
      }
    }

    textarea {
      border-radius: 8px;
      width: 100%;
      flex: 1;
      min-height: 0;
      resize: none;
      color: var(--app-text);
      border: 1px solid var(--app-border-soft);
      background: var(--app-surface-strong);
      font-family: inherit;
      font-size: 15px;
      line-height: 1.7;
      padding: 16px 18px;
      transition:
        border-color 0.18s ease,
        box-shadow 0.18s ease,
        background-color 0.18s ease;
    }

    textarea:focus {
      outline: none;
      border-color: var(--app-accent);
      box-shadow: 0 0 0 3px var(--app-accent-soft);
    }
  }

  .form-container {
    display: flex;
    flex-direction: column;
    height: 100%;
    min-height: 0;
    padding: 16px;
    border: 1px solid var(--app-border-soft);
    border-radius: var(--app-radius);
    background: rgba(255, 255, 255, 0.44);

    :deep(.el-select__wrapper) {
      padding: 0.35rem 0.75rem;
    }

    .service-select {
      margin: 0 0 18px;
    }
  }
}

@media (max-width: 820px) {
  .main {
    padding: 14px 14px 8px;
  }

  .main-container {
    grid-template-columns: minmax(0, 1fr) minmax(292px, 320px);
    gap: 10px;
  }
}
</style>
