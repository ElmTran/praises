<script setup lang="ts">
import { appWindow } from "@tauri-apps/api/window";
import { ref } from "vue";
const maximized = ref(false);
</script>

<template>
  <div data-tauri-drag-region class="titlebar">
    <button
      id="titlebar-minimize"
      class="titlebar-button"
      @click="appWindow.minimize()"
    >
      <i-ep-minus />
    </button>
    <button
      id="titlebar-maximize"
      class="titlebar-button"
      @click="appWindow.toggleMaximize()"
    >
      <i :class="maximized ? 'i-mdi-window-restore' : 'i-mdi-maximize'" />
    </button>
    <button
      id="titlebar-close"
      class="titlebar-button"
      @click="appWindow.hide()"
    >
      <i-ep-close />
    </button>
  </div>
</template>
<style scoped lang="scss">
.titlebar {
  height: 30px;
  background: rgba(245, 241, 234, 0.86);
  border-bottom: 1px solid var(--app-border-soft);
  user-select: none;
  display: flex;
  justify-content: flex-end;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9999;
}
.titlebar-button {
  background: transparent;
  border: none;
  color: var(--app-text-muted);
  font-size: 12px;
  padding: 0 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}
.titlebar-button:hover {
  color: var(--app-text);
  background: rgba(23, 20, 19, 0.05);
}
</style>
