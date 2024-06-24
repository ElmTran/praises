<script setup lang="ts">
import { ref, reactive } from "vue";
const config = reactive({
  autoplay: false,
});

const audioSrc = ref("");
</script>
<template>
  <el-footer class="footer">
    <div class="play-bar">
      <div class="play-bar__controls">
        <audio
          ref="audioPlayer"
          :src="audioSrc"
          :autoplay="config.autoplay"
          controls
          controlslist="nodownload"
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
