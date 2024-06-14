<script setup lang="ts">
import { ref } from "vue";
const drawer = ref(false);
const handleOpen = () => {
  drawer.value = true;
};
const handleClose = () => {
  drawer.value = false;
};
</script>
<template>
  <el-aside width="20%">
    <el-menu
      default-active="1"
      class="el-vertical-menu"
      background-color="#545c64"
      :collapse="true"
      @open="handleOpen"
      @close="handleClose"
    >
    </el-menu>
    <el-drawer :visible.sync="drawer" direction="rtl" class="drawer" size="80%">
      <p>Form</p>
    </el-drawer>
  </el-aside>
</template>

<style scoped lang="scss"></style>
