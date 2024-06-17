<template>
  <div id="app">
    <el-container class="container">
      <SideBar />
      <el-container class="main">
        <router-view />
        <Footer />
      </el-container>
    </el-container>
  </div>
</template>
<style scoped lang="scss">
.container {
  .main {
    display: flex;
    flex-direction: column;
    flex: 1;
    overflow: auto;
    height: calc(100vh - 16px);
  }
}
</style>
