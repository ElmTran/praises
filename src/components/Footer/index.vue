<script setup lang="ts">
import { reactive } from "vue";
import { useTtsStore } from "../../store/tts";
import { storeToRefs } from "pinia";

const config = reactive({
  autoplay: false,
});
const ttsStore = useTtsStore();
const { audioUrl } = storeToRefs(ttsStore);
</script>
<template>
  <el-footer class="footer">
    <div class="play-bar">
      <span class="play-bar__controls">
        <audio
          ref="audioPlayer"
          :src="audioUrl"
          :autoplay="config.autoplay"
          controls
          class="audio-player"
        />
      </span>
      <span class="play-bar__button">
        <el-button
          type="primary"
          icon="i-ep-download"
          circle
          class="download"
        />
      </span>
    </div>
  </el-footer>
</template>

<style scoped lang="scss">
.footer {
  background-color: #f5f7fa;
  padding: 0;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  .play-bar {
    display: flex;
    align-items: center;
    .play-bar__controls {
      display: flex;
    }
    .play-bar__button {
      margin-left: 20px;
    }
  }
}
</style>
