<script setup lang="ts">
import { useTtsStore } from "../../../store/tts";
import { $t } from "../../../locales";
const ttsStore = useTtsStore();

const convert = () => {
  ttsStore.convert();
};
</script>

<template>
  <div class="bottom-container">
    <button class="button" @click="convert">
      <span class="button-content">{{ $t("tts.azure.convert") }}</span>
    </button>
  </div>
</template>
<style scoped lang="scss">
.bottom-container {
  display: flex;
  justify-content: center;

  .button {
    position: relative;
    overflow: hidden;
    height: 38px;
    min-width: 108px;
    border-radius: 12px;
    background: rgba(122, 31, 50, 0.92);
    color: #fff;
    border: 1px solid rgba(122, 31, 50, 0.26);
    cursor: pointer;
    transition:
      background-color 0.18s ease,
      transform 0.18s ease,
      box-shadow 0.18s ease;
  }

  .button:hover {
    background: #6a1b2b;
    box-shadow: 0 6px 16px rgba(122, 31, 50, 0.14);
    transform: translateY(-1px);
  }

  .button-content {
    position: relative;
    z-index: 1;
    font-size: 13px;
    font-weight: 600;
    font-family: inherit;
  }
}
</style>
