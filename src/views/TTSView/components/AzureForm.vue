<script setup lang="ts">
import { ref, reactive } from "vue";
import { languageOptions, speakerOptions } from "../../../utils/constants";
import { useTtsStore } from "../../../store/tts";
import { storeToRefs } from "pinia";

type OptionType = { value: string; label: string };

const ttsTemplate = ref("");
const ttsTemplates = reactive([{ value: "default", label: "default" }]);

const ttsStore = useTtsStore();
const { state } = storeToRefs(ttsStore);
const styleOptions = ref<OptionType[]>([]);
const roleOptions = ref<OptionType[]>([]);
const useStyleAndRoleOptions = (value: string) => {
  const speaker = speakerOptions.find((item) => item.value === value);
  styleOptions.value = speaker?.styles || [];
  roleOptions.value = speaker?.roles || [];
};
useStyleAndRoleOptions(state.value.speaker);
const save = () => {
  console.log("save");
};
</script>
<template>
  <div class="form-container" :inline="true" label-width="140px">
    <el-form>
      <el-form-item>
        <template #label>
          <span class="item-label">Language</span>
        </template>
        <el-select
          v-model="state.language"
          placeholder="please select"
          class="form-item"
        >
          <el-option
            v-for="item in languageOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </el-form-item>
      <el-form-item>
        <template #label>
          <span class="item-label">Speaker</span>
        </template>
        <el-select
          v-model="state.speaker"
          placeholder="please select"
          class="form-item"
          @change="useStyleAndRoleOptions"
        >
          <el-option
            v-for="item in speakerOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </el-form-item>
      <el-form-item v-if="styleOptions.length">
        <template #label>
          <span class="item-label">Style</span>
        </template>
        <el-select
          v-model="state.style"
          placeholder="please select"
          class="form-item"
        >
          <el-option
            v-for="item in styleOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </el-form-item>
      <el-form-item v-if="roleOptions.length">
        <template #label>
          <span class="item-label">Role</span>
        </template>
        <el-select
          v-model="state.role"
          placeholder="please select"
          class="form-item"
        >
          <el-option
            v-for="item in roleOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </el-form-item>
      <el-form-item>
        <template #label>
          <span class="item-label">Rate</span>
        </template>
        <el-slider
          v-model="state.rate"
          :min="0"
          :max="100"
          size="small"
          class="form-item-slider"
        />
      </el-form-item>
      <el-form-item>
        <template #label>
          <span class="item-label">Pitch</span>
        </template>
        <el-slider
          v-model="state.pitch"
          :min="0"
          :max="100"
          size="small"
          class="form-item-slider"
        />
      </el-form-item>
    </el-form>
    <div class="control-bar">
      <span>
        <el-select
          v-model="ttsTemplate"
          placeholder="please select"
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
  </div>
</template>
<style scoped lang="scss">
.form-container {
  display: flex;
  flex-direction: column;
  flex: 1;
  .el-form {
    .item-label {
      font-size: 14px;
      color: rgba(0, 0, 0, 0.75);
    }
    .form-item {
      width: 160px;
      margin-left: auto;
    }
    .form-item-slider {
      width: 150px;
      margin-left: auto;
    }
  }
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
      height: 30px;
      .text {
        padding: 0 10px;
      }
    }
  }
}
</style>
