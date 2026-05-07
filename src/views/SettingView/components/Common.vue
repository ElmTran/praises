<script lang="ts" setup>
import { useSettingStore } from "../../../store/setting";
import { storeToRefs } from "pinia";
import { $t } from "../../../locales";

const settingStore = useSettingStore();
const { autoplay, locale } = storeToRefs(settingStore);
const languages = [
  { label: "English", value: "en-US" },
  { label: "中文", value: "zh-CN" },
];
const keysPressed: string[] = [];

function validateKey(key: string) {
  const keyPattern =
    /^(Ctrl|Alt|Shift)(\s*\+\s*(Ctrl|Alt|Shift))*\s*\+\s*[A-Za-z]$/;
  return keyPattern.test(key);
}
const handleKeyDown = async (e: KeyboardEvent) => {
  e.preventDefault();
  if (!keysPressed.includes(e.key)) {
    keysPressed.push(e.key);
  }
  if (keysPressed.length < 2) {
    return;
  }
  if (!validateKey(keysPressed.join("+"))) {
    keysPressed.length = 0;
    return;
  }
  settingStore.listeningKey = keysPressed.join("+");
  await settingStore.setListeningKey();
};
const clearKeys = () => {
  setTimeout(async () => {
    keysPressed.length = 0;
  }, 1000);
};
</script>
<template>
  <div class="setting-box">
    <el-row class="setting-item">
      <el-col :span="10">
        <span class="item__label">{{
          $t("setting.form.language")
        }}</span></el-col
      >
      <el-col :span="14">
        <el-select
          v-model="locale"
          class="item__input"
          @change="settingStore.setlocale"
        >
          <el-option
            v-for="item in languages"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </el-col>
    </el-row>
    <el-row class="setting-item">
      <el-col :span="10">
        <span class="item__label">{{
          $t("setting.form.autoplay")
        }}</span></el-col
      >
      <el-col :span="14">
        <el-switch
          v-model="autoplay"
          class="item__input"
          @change="settingStore.setAutoplay"
        />
      </el-col>
    </el-row>
    <el-row class="setting-item">
      <el-col :span="10">
        <span class="item__label">{{
          $t("setting.form.listeningKey")
        }}</span></el-col
      >
      <el-col :span="14">
        <el-input
          v-model="settingStore.listeningKey"
          class="item__input"
          @keydown="handleKeyDown"
          @keyup="clearKeys"
        />
      </el-col>
    </el-row>
  </div>
</template>
