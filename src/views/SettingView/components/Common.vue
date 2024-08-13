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
  </div>
</template>
