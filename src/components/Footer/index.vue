<script setup lang="ts">
import { useTtsStore } from "../../store/tts";
import { useSettingStore } from "../../store/setting";
import { storeToRefs } from "pinia";

const ttsStore = useTtsStore();
const settingStore = useSettingStore();
const { audioUrl } = storeToRefs(ttsStore);
const { autoplay } = storeToRefs(settingStore);
</script>
<template>
  <el-footer class="footer">
    <div class="play-bar">
      <audio ref="audioPlayer" :src="audioUrl" :autoplay="autoplay" controls />
      <span class="play-bar__button">
        <button class="Btn">
          <i-ep-download class="svgIcon" />
        </button>
      </span>
    </div>
  </el-footer>
</template>

<style scoped lang="scss">
.footer {
  flex: 0 0 auto;
  height: 58px;
  padding: 6px 20px 12px;
  display: flex;
  justify-content: center;
  align-items: center;

  .play-bar {
    display: flex;
    align-items: center;
    gap: 10px;
    width: min(460px, 100%);
    padding: 5px 10px;
    border: 1px solid var(--app-border-soft);
    border-radius: 999px;
    background: var(--app-surface-strong);

    audio {
      width: 100%;
      height: 32px;
    }

    audio::-webkit-media-controls-enclosure {
      width: 100%;
      overflow: hidden;
      background-color: transparent;
    }

    .Btn {
      width: 30px;
      height: 30px;
      border: none;
      border-radius: 10px;
      background-color: transparent;
      display: flex;
      align-items: center;
      justify-content: center;
      transition:
        background-color 0.18s ease,
        color 0.18s ease;
      cursor: pointer;

      .svgIcon {
        color: var(--app-text-muted);
      }
    }

    .Btn:hover .tooltip {
      opacity: 1;
      transition-duration: 0.18s;
    }

    .Btn:hover {
      background-color: var(--app-accent-soft);
    }

    .Btn:hover .svgIcon {
      color: var(--app-accent);
    }
  }
}
</style>
