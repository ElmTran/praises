<script setup lang="ts">
import { ref, reactive } from "vue";
import { DeviceOption, getDevices } from "../../../lib/windows";

import { voiceOptions } from "../../../utils/constants";
const condition = reactive({
  device: "",
  voice: "",
  volume: 1,
  rate: 1,
});
const devices = ref([] as DeviceOption[]);

async function fetchDevices() {
  devices.value = await getDevices();
}

fetchDevices();
</script>
<template>
  <div class="tts-form">
    <el-form label-position="top">
      <el-form-item label="Device">
        <el-select v-model="condition.device" placeholder="please select">
          <el-option
            v-for="item in devices"
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
      <el-form-item label="Volume">
        <el-slider v-model="condition.volume" :min="0" :max="1" :step="0.1" />
      </el-form-item>
      <el-form-item label="Rate">
        <el-slider v-model="condition.rate" :min="0" :max="1" :step="0.1" />
      </el-form-item>
    </el-form>
  </div>
</template>
<style scoped lang="scss"></style>
