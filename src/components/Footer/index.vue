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
      <div class="play-bar__controls">
        <audio
          ref="audioPlayer"
          :src="audioUrl"
          :autoplay="config.autoplay"
          controls
          class="audio-player"
        />
      </div>
      <div class="play-bar__button">
        <el-button
          type="primary"
          icon="i-ep-download"
          circle
          class="download"
        />
      </div>
    </div>
  </el-footer>
</template>

<style scoped lang="scss"></style>
