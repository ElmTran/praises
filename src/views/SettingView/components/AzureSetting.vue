<script lang="ts" setup>
import { useSettingStore } from "../../../store/setting";
import { storeToRefs } from "pinia";
import { $t } from "../../../locales";

const settingStore = useSettingStore();
const { azure } = storeToRefs(settingStore);
</script>
<template>
  <div class="setting-box">
    <div class="setting-item">
      <span class="item__label">{{ $t("setting.form.region") }}</span>
      <el-input
        v-model="azure.region"
        class="item__input"
        @change="settingStore.setAzureEndpoint"
      />
    </div>
    <div class="setting-item">
      <span class="item__label">{{ $t("setting.form.subscriptionKey") }}</span>
      <el-input
        v-model="azure.subscription"
        class="item__input"
        show-password
        @change="settingStore.setAzureSubscription"
      />
    </div>
  </div>
</template>
