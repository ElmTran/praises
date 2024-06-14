<template>
  <div id="app">
    <el-container class="container">
      <el-header class="header">
        <Header />
      </el-header>
      <el-container class="body">
        <SideBar />
        <el-container class="main">
          <router-view />
          <Footer />
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>
<style scoped lang="scss">
.header {
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
