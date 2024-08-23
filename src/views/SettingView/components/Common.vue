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
      <el-col :span="8">
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
      <el-col :span="8">
        <span class="item__label">{{
          $t("setting.form.autoplay")
        }}</span></el-col
      >
      <el-col :span="14">
        <el-switch
          v-model="autoplay"
          class="item__input"
          style="--el-switch-on-color: #14ce66; --el-switch-off-color: #c8c8c8"
          @change="settingStore.setAutoplay"
        />
      </el-col>
    </el-row>
    <el-row class="setting-item">
      <el-col :span="8">
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
<style scoped lang="scss">
.button {
  position: relative;
  display: inline-block;
  padding: 0.3rem 0.8rem;
  border: none;
  outline: none;
  border-radius: 20px;
  background-color: #f06c9b;
  color: #ffeeee;
  font-size: 12px;
  font-weight: bold;
  cursor: pointer;
  overflow: hidden;
  transition: background-color 0.3s ease;
}

.button:hover {
  background-color: #f26d5f;
}

.button .text {
  position: relative;
  z-index: 2;
}

.circle-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.circle {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 0;
  height: 0;
  background-color: #fad779;
  border-radius: 50%;
  opacity: 0.5;
  transition: all 0.5s ease;
}

.button:hover .circle {
  width: 200%;
  height: 200%;
  transform: translate(-50%, -50%) scale(1);
  opacity: 0;
}

.button:focus {
  box-shadow: 0 0 0 2px #ff8d55;
  outline: none;
}

.button.animated .circle {
  animation: pulse 1s infinite;
}

@keyframes pulse {
  0% {
    box-shadow: 0 0 0 0 rgba(250, 215, 121, 0.4);
  }

  70% {
    box-shadow: 0 0 0 10px rgba(250, 215, 121, 0);
  }

  100% {
    box-shadow: 0 0 0 0 rgba(250, 215, 121, 0);
  }
}
</style>
