<script setup lang="ts">
import { ref, reactive } from "vue";
import { useTtsStore } from "../../../store/tts";

const ttsTemplate = ref("");
const ttsTemplates = reactive([{ value: "default", label: "默认" }]);
const ttsStore = useTtsStore();

const save = () => {
  console.log("save");
};

const convert = () => {
  ttsStore.convert();
};
</script>

<template>
  <div class="tts-control">
    <div class="control-bar">
      <span>
        <el-select
          v-model="ttsTemplate"
          placeholder="请选择模板"
          style="width: 160px"
        >
          <el-option
            v-for="item in ttsTemplates"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </span>
      <button class="save-btn" @click="save">
        <span class="text">Save</span>
      </button>
    </div>
    <button class="convert-btn" @click="convert">Convert</button>
  </div>
</template>
<style scoped lang="scss">
.tts-control {
  .control-bar {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    .save-btn {
      margin-left: 10px;
      background-color: #67c23a;
      color: #fff;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      .text {
        padding: 0 10px;
      }
    }
  }
  .convert-btn {
    margin-top: 10px;
    width: 100%;
    height: 40px;
    background-color: #409eff;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
}
</style>
