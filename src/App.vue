<template>
  <TitleBar />
  <div id="app" class="app">
    <el-container class="container">
      <SideBar />
      <el-container class="main">
        <router-view />
      </el-container>
    </el-container>
  </div>
</template>
<style scoped lang="scss">
.app {
  position: fixed;
  top: 30px;
  left: 0;
  right: 0;
  bottom: 0;
  .container {
    padding: 0 10px;
    .main {
      display: flex;
      flex-direction: column;
      flex: 1;
      overflow: auto;
      height: calc(100vh - 26px);
    }
  }
}
</style>
