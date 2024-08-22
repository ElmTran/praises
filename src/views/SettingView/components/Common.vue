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
const handleKeyDown = (e: KeyboardEvent) => {
  e.preventDefault();
  if (!keysPressed.includes(e.key)) {
    keysPressed.push(e.key);
  }
  settingStore.listeningKey = keysPressed.join("+");
  settingStore.setListeningKey();
};
const clearKeys = () => {
  setTimeout(() => {
    keysPressed.length = 0;
  }, 1000);
};
</script>
<template>
  <div class="setting-box">
    <div class="setting-item">
      <span class="item__label">{{ $t("setting.form.language") }}</span>
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
    </div>
    <div class="setting-item">
      <span class="item__label">{{ $t("setting.form.autoplay") }}</span>
      <el-switch
        v-model="autoplay"
        class="item__input"
        style="--el-switch-on-color: #13ce66; --el-switch-off-color: #c8c8c8"
        @change="settingStore.setAutoplay"
      />
    </div>
    <div class="setting-item">
      <span class="item__label">{{ $t("setting.form.listeningKey") }}</span>
      <el-input
        v-model="settingStore.listeningKey"
        class="item__input"
        @keydown="handleKeyDown"
        @keyup="clearKeys"
      />
    </div>
  </div>
</template>
