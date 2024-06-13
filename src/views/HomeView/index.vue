<script setup lang="ts">
import Main from "./components/Main.vue";
</script>
<template>
  <el-container class="container">
    <el-header class="header">
      <Header />
    </el-header>
    <el-container class="body">
      <SideBar />
      <el-container class="main">
        <Main />
        <Footer />
      </el-container>
    </el-container>
  </el-container>
</template>

<style scoped lang="scss">
.header {
  background-color: #545c64;
  color: #fff;
  padding: 0;
}
.body {
  display: flex;
  flex: 1;
  .main {
    display: flex;
    flex-direction: column;
    flex: 1;
    overflow: auto;
    height: calc(100vh - 80px);
  }
}
</style>
