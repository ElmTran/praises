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
      <audio
        ref="audioPlayer"
        :src="audioUrl"
        :autoplay="config.autoplay"
        controls
      />
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
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  .play-bar {
    display: flex;
    align-items: center;
    audio {
      width: 300px;
      height: 35px;
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
      border-radius: 50%;
      background-color: transparent;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all ease-in-out 0.3s;
      cursor: pointer;
      .svgIcon {
        color: rgb(16, 16, 16);
      }
    }
    .Btn:hover .tooltip {
      opacity: 1;
      transition-duration: 0.3s;
    }

    .Btn:hover {
      background-color: rgba(161, 117, 233, 0.9);
      transition-duration: 0.3s;
      box-shadow: 0 0 10px rgba(161, 117, 233, 0.6);
    }

    .Btn:hover .svgIcon {
      animation: slide-in-top 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    }

    @keyframes slide-in-top {
      0% {
        transform: translateY(-10px);
        opacity: 0;
      }

      100% {
        transform: translateY(0px);
        opacity: 1;
      }
    }
  }
}
</style>
