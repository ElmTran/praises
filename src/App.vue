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
  color: var(--app-text);

  .container {
    gap: 12px;
    height: 100%;
    min-height: 0;
    padding: 12px 16px 14px;

    .main {
      display: flex;
      flex-direction: column;
      flex: 1;
      min-width: 0;
      min-height: 0;
      overflow: hidden;
      border: 1px solid var(--app-border-soft);
      border-radius: 16px;
      background: var(--app-surface);
      box-shadow: var(--app-shadow);
    }
  }
}
</style>
