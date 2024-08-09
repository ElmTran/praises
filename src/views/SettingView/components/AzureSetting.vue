<script lang="ts" setup>
import { useSettingStore } from "../../../store/setting";
import { storeToRefs } from "pinia";
import { $t } from "../../../locales";

const settingStore = useSettingStore();
const { azure } = storeToRefs(settingStore);
</script>
<template>
  <div class="setting-box">
    <el-form>
      <el-form-item>
        <template #label>
          <span class="form-item__label">{{ $t("setting.form.region") }}</span>
        </template>
        <el-input
          v-model="azure.region"
          class="form-item"
          @change="settingStore.setAzureEndpoint"
        />
      </el-form-item>
      <el-form-item>
        <template #label>
          <span class="form-item__label">{{
            $t("setting.form.subscriptionKey")
          }}</span>
        </template>
        <el-input
          v-model="azure.subscription"
          class="form-item"
          show-password
          @change="settingStore.setAzureSubscription"
        />
      </el-form-item>
    </el-form>
  </div>
</template>
