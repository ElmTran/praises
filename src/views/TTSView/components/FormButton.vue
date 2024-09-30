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
    height: 2.8rem;
    width: 7rem;
    border-radius: 1.5rem;
    background: #3d3a4e;
    background-size: 400%;
    color: #fff;
    border: none;
    cursor: pointer;
  }

  .button:hover::before {
    transform: scaleX(1);
  }

  .button-content {
    position: relative;
    z-index: 1;
    font-size: 1rem;
    font-weight: 500;
    font-family: inherit;
  }

  .button::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    transform: scaleX(0);
    transform-origin: 0 50%;
    width: 100%;
    height: inherit;
    border-radius: inherit;
    background: linear-gradient(
      to bottom right,
      rgba(93, 140, 233, 0.377) 10.8%,
      rgba(218, 88, 238, 0.478) 94.3%
    );
    transition: all 0.475s;
  }
}
</style>
