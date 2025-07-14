<script setup lang="ts">
import { qwenVoiceOptions, qwenModelOptions } from "../../../utils/constants";
import { useTtsStore } from "../../../store/tts";
import { storeToRefs } from "pinia";
import { $t } from "../../../locales";

const ttsStore = useTtsStore();
const { state } = storeToRefs(ttsStore);

// Initialize default values
if (!state.value.speaker) {
  state.value.speaker = qwenVoiceOptions.value[0].value;
}
if (!state.value.model) {
  state.value.model = qwenModelOptions.value[0].value;
}
</script>

<template>
  <div class="form-box" :inline="true" label-width="140px">
    <el-form>
      <el-form-item>
        <template #label>
          <span class="item-label">
            {{ $t("tts.qwen.model") }}
          </span>
        </template>
        <el-select
          v-model="state.model"
          class="form-item"
          :placeholder="$t('tts.qwen.placeholder.model')"
          :popper-append-to-body="false"
        >
          <el-option
            v-for="item in qwenModelOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </el-form-item>
      <el-form-item>
        <template #label>
          <span class="item-label">
            {{ $t("tts.qwen.voice") }}
          </span>
        </template>
        <el-select
          v-model="state.speaker"
          class="form-item"
          :placeholder="$t('tts.qwen.placeholder.voice')"
          :popper-append-to-body="false"
        >
          <el-option
            v-for="item in qwenVoiceOptions"
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
