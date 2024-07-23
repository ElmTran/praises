<script lang="ts" setup>
import { useSettingStore } from "../../../store/setting";
import { storeToRefs } from "pinia";

const settingStore = useSettingStore();
const { azure, autoplay } = storeToRefs(settingStore);
</script>
<template>
  <div class="setting-box">
    <el-form>
      <el-form-item>
        <template #label>
          <span class="form-item__label">Region</span>
        </template>
        <el-input
          v-model="azure.region"
          class="form-item"
          @change="settingStore.setAzureEndpoint"
        />
      </el-form-item>
      <el-form-item>
        <template #label>
          <span class="form-item__label">Subscription Key</span>
        </template>
        <el-input
          v-model="azure.subscription"
          class="form-item"
          show-password
          @change="settingStore.setAzureSubscription"
        />
      </el-form-item>
      <el-form-item>
        <template #label>
          <span class="form-item__label">AutoPlay</span>
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
