<script setup lang="ts">
import { ref, reactive } from "vue";
import { Convert } from "../../../lib/azure.ts";
const ttsTemplate = ref("");
const ttsTemplates = reactive([{ value: "default", label: "默认" }]);
const save = () => {
  console.log("save");
};

const convert = () => {
  Convert();
};
</script>

<template>
  <div class="tts-control">
    <el-select v-model="ttsTemplate" placeholder="请选择模板">
      <el-option
        v-for="item in ttsTemplates"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      />
    </el-select>
    <el-button type="primary" @click="save">保存</el-button>
    <el-button type="primary" @click="convert">转换</el-button>
  </div>
</template>
