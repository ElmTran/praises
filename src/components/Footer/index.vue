<script setup lang="ts">
import { ref, reactive } from "vue";
import { store } from "../../store/index";
const config = reactive({
  autoplay: false,
});

const audioSrc = ref("");

store.value.onKeyChange("audioSrc", (src: any) => {
  console.log("src", src.value);
  audioSrc.value = src.value;
});
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
