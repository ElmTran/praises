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
  <el-main>
    <div class="textarea-container">
      <el-input
        v-model="state.text"
        type="textarea"
        :rows="10"
        placeholder="请输入文本"
      />
    </div>
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
      <FormButton />
    </div>
  </el-main>
</template>

<style scoped lang="scss"></style>
