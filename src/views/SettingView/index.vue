<script setup lang="ts">
import AzureSetting from "./components/AzureSetting.vue";
import CommonSetting from "./components/Common.vue";
</script>
<template>
  <el-main class="main">
    <div class="setting-container">
      <AzureSetting />
      <CommonSetting />
    </div>
  </el-main>
</template>
<style scoped lang="scss">
.main {
  padding: 5px 20px;
}
</style>
