<script lang="ts" setup>
import { useSettingStore } from "../../../store/setting";
import { storeToRefs } from "pinia";
import { $t } from "../../../locales";

const settingStore = useSettingStore();
const { azure } = storeToRefs(settingStore);
</script>
<template>
  <div class="setting-box">
    <el-row class="setting-item">
      <el-col :span="8">
        <span class="item__label">{{ $t("setting.form.region") }}</span>
      </el-col>
      <el-col :span="14">
        <el-input
          v-model="azure.region"
          class="item__input"
          @change="settingStore.setAzureEndpoint"
        />
      </el-col>
    </el-row>
    <el-row class="setting-item">
      <el-col :span="8">
        <span class="item__label">{{
          $t("setting.form.subscriptionKey")
        }}</span>
      </el-col>
      <el-col :span="14">
        <el-input
          v-model="azure.subscription"
          class="item__input"
          show-password
          @change="settingStore.setAzureSubscription"
        />
      </el-col>
    </el-row>
  </div>
</template>
