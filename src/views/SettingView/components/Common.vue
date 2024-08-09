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
    <el-form>
      <el-form-item>
        <template #label>
          <span class="form-item__label">{{
            $t("setting.form.language")
          }}</span>
        </template>
        <el-select
          v-model="locale"
          class="form-item"
          @change="settingStore.setlocale"
        >
          <el-option
            v-for="item in languages"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </el-form-item>
      <el-form-item>
        <template #label>
          <span class="form-item__label">{{
            $t("setting.form.autoplay")
          }}</span>
        </template>
        <el-switch
          v-model="autoplay"
          class="form-item"
          style="--el-switch-on-color: #13ce66; --el-switch-off-color: #c8c8c8"
          @change="settingStore.setAutoplay"
        />
      </el-form-item>
    </el-form>
  </div>
</template>
