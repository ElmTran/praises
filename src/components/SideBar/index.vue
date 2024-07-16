<script setup lang="ts">
import { ref } from "vue";
import router from "../../router";

const routes = ref(router.getRoutes());
const isActived = ref(router.currentRoute.value.path);
</script>
<template>
  <el-menu
    :default-active="isActived"
    class="el-vertical-menu"
    :collapse="true"
    router
  >
    <el-menu-item v-for="route in routes" :key="route.path" :index="route.path">
      <component :is="route.meta.icon" class="el-menu__icon" />
      <template #title>{{ route.meta.title }}</template>
    </el-menu-item>
  </el-menu>
</template>

<style scoped lang="scss">
.el-menu {
  width: 53px;
  .el-menu-item {
    display: flex;
  }
}
</style>
