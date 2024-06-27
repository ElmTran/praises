<script setup lang="ts">
import { ref, reactive } from "vue";
import { useAudioStore } from "../../store/modules/audio";
const config = reactive({
  autoplay: false,
});

const audioStore = useAudioStore();

const audioSrc = ref(URL.createObjectURL(new Blob([audioStore.audio])));
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
