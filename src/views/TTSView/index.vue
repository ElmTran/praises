<script setup lang="ts">
import { ref, reactive } from "vue";
import AzureForm from "./components/AzureForm.vue";
import WindowsForm from "./components/WindowsForm.vue";
import FormButton from "./components/FormButton.vue";
import { useTtsStore } from "../../store/tts";
import { storeToRefs } from "pinia";

type ServiceType = "azure" | "edge" | "windows";

const ttsStore = useTtsStore();
const { state } = storeToRefs(ttsStore);
const service = ref<ServiceType>("azure");
const services = reactive([
  { value: "azure", label: "Azure" },
  { value: "edge", label: "Edge" },
  { value: "windows", label: "Windows" },
  { value: "chat_tts", label: "ChatTTS" },
]);

const forms: Record<ServiceType, typeof AzureForm> = {
  azure: AzureForm,
  edge: AzureForm, // AzureForm is used for both Azure and Edge
  windows: WindowsForm,
};
</script>
<template>
  <el-main class="main">
    <el-row :gutter="10" class="main-container">
      <el-col :span="16">
        <div class="textarea-container">
          <el-input
            v-model="state.text"
            type="textarea"
            placeholder="请输入文本"
            autosize
          />
        </div>
      </el-col>
      <el-col :span="8">
        <div class="options-container">
          <el-select v-model="service" placeholder="请选择服务">
            <el-option
              v-for="item in services"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
          <component :is="forms[service]" />
          <div class="bottom-container">
            <FormButton />
          </div>
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
}
.textarea-container {
  display: flex;
  flex-direction: column;
  height: 100%;
  margin-bottom: 20px;
  .el-textarea__inner {
    flex: 1;
  }
}
.options-container {
  display: flex;
  flex-direction: column;
  height: 100%;
  .el-select {
    margin-bottom: 20px;
  }
}
.bottom-container {
  margin-top: auto;
}
</style>
