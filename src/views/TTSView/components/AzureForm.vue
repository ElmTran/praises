<script setup lang="ts">
import { reactive } from "vue";
import {
  languageOptions,
  voiceOptions,
  styleOptions,
  roleOptions,
} from "../../../utils/constants";

const condition = reactive({
  language: "",
  voice: "",
  style: "",
  role: "",
  speed: 1,
  pitch: 1,
});
</script>
<template>
  <div class="tts-form">
    <el-form label-position="top">
      <el-form-item label="Language">
        <el-select v-model="condition.language" placeholder="please select">
          <el-option
            v-for="item in languageOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </el-form-item>
      <el-form-item label="Voice">
        <el-select v-model="condition.voice" placeholder="please select">
          <el-option
            v-for="item in voiceOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </el-form-item>
      <el-form-item label="Style">
        <el-select v-model="condition.style" placeholder="please select">
          <el-option
            v-for="item in styleOptions"
            :key="item"
            :label="item"
            :value="item"
          />
        </el-select>
      </el-form-item>
      <el-form-item label="Role">
        <el-select v-model="condition.role" placeholder="please select">
          <el-option
            v-for="item in roleOptions"
            :key="item"
            :label="item"
            :value="item"
          />
        </el-select>
      </el-form-item>
      <el-form-item label="Speed">
        <el-slider v-model="condition.speed" :min="0" :max="100" />
      </el-form-item>
      <el-form-item label="Pitch">
        <el-slider v-model="condition.pitch" :min="0" :max="100" />
      </el-form-item>
    </el-form>
  </div>
</template>
<style scoped lang="scss">
.tts-form {
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 20px;
}
</style>
