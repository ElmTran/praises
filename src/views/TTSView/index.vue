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
  // { value: "edge", label: "Edge" },
  // { value: "windows", label: "Windows" },
  // { value: "chat_tts", label: "ChatTTS" },
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
          <textarea id="textarea" v-model="state.text" name="textarea" />
        </div>
      </el-col>
      <el-col :span="8" class="form-container">
        <el-select
          v-model="service"
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
        <component :is="forms[service]" />
        <FormButton />
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
  height: 100%;
  padding: 0 10px;
  display: flex;
  align-items: center;
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
  padding: 20px 0;
  .el-select {
    margin-bottom: 10px;
  }
}
</style>
