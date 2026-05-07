<script setup lang="ts">
import router from "../../router";
import { useTtsStore } from "../../store/tts";
const ttsStore = useTtsStore();
const goToSetting = () => {
  ttsStore.audioUrl = "";
  router.push("/setting");
};
</script>
<template>
  <div class="sidebar-groups">
    <section class="sidebar-group">
      <button class="button" @click="router.push('/')">
        <i-ep-microphone class="icon" />
      </button>
      <button class="button" @click="goToSetting">
        <i-ep-tools class="icon" />
      </button>
    </section>
  </div>
</template>

<style scoped lang="scss">
.sidebar-groups {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 8px;

  .sidebar-group {
    display: flex;
    flex-direction: column;
    gap: 8px;
    width: 44px;
    padding: 8px 4px;
    border: 1px solid var(--app-border-soft);
    border-radius: 14px;
    background: var(--app-surface);

    .button {
      outline: 0;
      border: 0;
      width: 34px;
      height: 34px;
      border-radius: 10px;
      background-color: transparent;
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--app-text-muted);
      transition:
        background-color 0.18s ease,
        color 0.18s ease,
        transform 0.18s ease;
      cursor: pointer;
    }

    .button:hover {
      color: var(--app-accent);
      background: var(--app-accent-soft);
      transform: translateY(-1px);
    }

    .icon {
      font-size: 16px;
    }
  }
}
</style>
