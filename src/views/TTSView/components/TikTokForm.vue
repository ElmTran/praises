<script setup lang="ts">
import { ref } from "vue";
import { tiktokLanguageOptions } from "../../../utils/constants";
import { useTtsStore } from "../../../store/tts";
import { storeToRefs } from "pinia";
import { $t } from "../../../locales";

const ttsStore = useTtsStore();
const { state } = storeToRefs(ttsStore);

type voiceOption = {
  value: string;
  label: string;
};

const speakerOptions = ref<voiceOption[]>([]);

const useSpeakerOptions = (value: string) => {
  let language = tiktokLanguageOptions.value.find(
    (item) => item.value === value,
  );
  if (!language) {
    language = tiktokLanguageOptions.value[0];
    state.value.language = language.value;
  }
  speakerOptions.value = language?.speakers || [];
  state.value.speaker = speakerOptions.value[0].value;
};
useSpeakerOptions(state.value.language);
</script>
<template>
  <div class="form-box" :inline="true" label-width="140px">
    <el-form>
      <el-form-item>
        <template #label>
          <span class="item-label">
            {{ $t("tts.tiktok.language") }}
          </span>
        </template>
        <el-select
          v-model="state.language"
          class="form-item"
          :placeholder="$t('tts.tiktok.placeholder.language')"
          :popper-append-to-body="false"
          @change="useSpeakerOptions(state.language)"
        >
          <el-option
            v-for="item in tiktokLanguageOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </el-form-item>
      <el-form-item>
        <template #label>
          <span class="item-label">
            {{ $t("tts.tiktok.voice") }}
          </span>
        </template>
        <el-select
          v-model="state.speaker"
          class="form-item"
          :placeholder="$t('tts.tiktok.placeholder.voice')"
          :popper-append-to-body="false"
        >
          <el-option
            v-for="item in speakerOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </el-form-item>
    </el-form>
  </div>
</template>
<style scoped lang="scss">
.form-box {
  display: flex;
  flex-direction: column;
  flex: 1;
  .el-form {
    .el-form-item {
      margin-bottom: 1rem;
    }

    .item-label {
      font-size: 14px;
      color: rgba(244, 91, 91, 0.8);
    }
    .form-item {
      width: 160px;
      margin-left: auto;
    }
    :deep(.el-select__wrapper) {
      padding: 0.2rem 1rem;
    }
  }
}
</style>
