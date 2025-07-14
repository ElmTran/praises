<script lang="ts" setup>
import { useSettingStore } from "../../../store/setting";
import { storeToRefs } from "pinia";
import { $t } from "../../../locales";

const settingStore = useSettingStore();
const { qwen } = storeToRefs(settingStore);
</script>
<template>
  <div class="setting-box">
    <el-row class="setting-item">
      <el-col :span="10">
        <span class="item__label">{{ $t("setting.form.qwenApiKey") }}</span>
      </el-col>
      <el-col :span="14">
        <el-input
          v-model="qwen.apiKey"
          class="item__input"
          show-password
          @change="settingStore.setQwenApiKey"
        />
      </el-col>
    </el-row>
  </div>
</template>
