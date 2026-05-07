<script setup lang="ts">
import { ref } from "vue";
import { languageOptions, SpeakerOption } from "../../../utils/constants";
import { useTtsStore } from "../../../store/tts";
import { useSettingStore } from "../../../store/setting";
import { storeToRefs } from "pinia";
import { $t } from "../../../locales";

type OptionType = { value: string; label: string };

const ttsStore = useTtsStore();
const settingStore = useSettingStore();
const speakerOptions = ref<SpeakerOption[]>([]);
const styleOptions = ref<OptionType[]>([]);
const roleOptions = ref<OptionType[]>([]);
const template = ref("");

const { state } = storeToRefs(ttsStore);
const { ttsTemplate } = storeToRefs(settingStore);

const useSpeakerOptions = (value: string) => {
  let language = languageOptions.value.find((item) => item.value === value);
  if (!language) {
    language = languageOptions.value[0];
    state.value.language = language.value;
  }
  speakerOptions.value = language?.speakers || [];
  state.value.speaker = speakerOptions.value[0].value;
  useStyleAndRoleOptions(state.value.speaker);
};

const useStyleAndRoleOptions = (value: string) => {
  const speaker = speakerOptions.value.find((item) => item.value === value);
  styleOptions.value = speaker?.styles || [];
  roleOptions.value = speaker?.roles || [];
};

const changeTemplate = (value: string) => {
  const template = ttsTemplate.value.find((item) => item.name === value);
  if (template) {
    ttsStore.setValue(template.value);
  }
  useSpeakerOptions(state.value.language);
};

const save = () => {
  if (!template.value) {
    return;
  }
  const { text, ...value } = state.value;
  settingStore.setTtsTemplate({
    value: value,
    name: template.value,
  });
};

// Initialize
useSpeakerOptions(state.value.language);
</script>
<template>
  <div class="form-box" :inline="true" label-width="140px">
    <el-form>
      <el-form-item>
        <template #label>
          <span class="item-label">
            {{ $t("tts.azure.language") }}
          </span>
        </template>
        <el-select
          v-model="state.language"
          class="form-item"
          :placeholder="$t('tts.azure.placeholder.language')"
          fit-input-width
          filterable
          @change="useSpeakerOptions(state.language)"
        >
          <el-option
            v-for="item in languageOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </el-form-item>
      <el-form-item>
        <template #label>
          <span class="item-label">
            {{ $t("tts.azure.speaker") }}
          </span>
        </template>
        <el-select
          v-model="state.speaker"
          class="form-item"
          :placeholder="$t('tts.azure.placeholder.speaker')"
          filterable
          @change="useStyleAndRoleOptions(state.speaker)"
        >
          <el-option
            v-for="item in speakerOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </el-form-item>
      <el-form-item v-if="styleOptions.length">
        <template #label>
          <span class="item-label">
            {{ $t("tts.azure.style") }}
          </span>
        </template>
        <el-select
          v-model="state.style"
          :placeholder="$t('tts.azure.placeholder.style')"
          class="form-item"
        >
          <el-option
            v-for="item in styleOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </el-form-item>
      <el-form-item v-if="roleOptions.length">
        <template #label>
          <span class="item-label">
            {{ $t("tts.azure.role") }}
          </span>
        </template>
        <el-select
          v-model="state.role"
          :placeholder="$t('tts.azure.placeholder.role')"
          class="form-item"
        >
          <el-option
            v-for="item in roleOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </el-form-item>
      <el-form-item>
        <template #label>
          <span class="item-label">
            {{ $t("tts.azure.rate") }}
          </span>
        </template>
        <el-slider
          v-model="state.rate"
          :min="0"
          :max="100"
          size="small"
          class="form-item-slider"
        />
      </el-form-item>
      <el-form-item>
        <template #label>
          <span class="item-label">
            {{ $t("tts.azure.pitch") }}
          </span>
        </template>
        <el-slider
          v-model="state.pitch"
          :min="0"
          :max="100"
          size="small"
          class="form-item-slider"
        />
      </el-form-item>
    </el-form>
    <div class="control-bar">
      <span>
        <el-select
          v-model="template"
          :placeholder="$t('tts.azure.placeholder.template')"
          class="template-select"
          clearable
          filterable
          allow-create
          @change="changeTemplate"
        >
          <el-option
            v-for="item in ttsTemplate"
            :key="item.value"
            :label="item.name"
            :value="item.name"
          />
        </el-select>
      </span>
      <button class="saveBtn" @click="save">
        <span class="IconContainer">
          <svg viewBox="0 0 384 512" height="0.9em" class="icon">
            <path
              d="M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z"
            />
          </svg>
        </span>
        <p class="btnLabel">{{ $t("tts.azure.save") }}</p>
      </button>
    </div>
  </div>
</template>
<style scoped lang="scss">
.form-box {
  display: flex;
  flex-direction: column;
  flex: 1;

  .el-form {
    .el-form-item {
      margin-bottom: 14px;
    }

    .item-label {
      color: var(--app-text-secondary);
      font-size: 13px;
      font-weight: 500;
    }

    .form-item {
      width: 200px;
      margin-left: auto;
    }

    .form-item-slider {
      width: 198px;
      margin-left: auto;
    }

    :deep(.el-select__wrapper) {
      padding: 0.2rem 0.75rem;
    }
  }

  .control-bar {
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: space-between;
    gap: 12px;

    .template-select {
      width: 166px;
    }

    :deep(.el-select__wrapper) {
      padding: 0.35rem 0.75rem;
    }

    .saveBtn {
      min-width: 92px;
      height: 38px;
      border-radius: 999px;
      border: 1px solid var(--app-border-soft);
      background-color: var(--app-surface-strong);
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
      cursor: pointer;
      color: var(--app-text-secondary);
      transition:
        border-color 0.18s ease,
        color 0.18s ease,
        transform 0.18s ease;
      overflow: hidden;
    }

    .IconContainer {
      width: 18px;
      height: 18px;
      color: var(--app-accent);
      background: transparent;
      border-radius: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
    }

    .icon {
      border-radius: 1px;
      fill: currentColor;
    }

    .btnLabel {
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: inherit;
      z-index: 1;
      font-size: 13px;
      font-weight: 500;
      margin: 0;
    }

    .saveBtn:hover {
      color: var(--app-accent);
      border-color: var(--app-border-strong);
      transform: translateY(-1px);
    }

    .saveBtn:active {
      transform: translateY(0);
    }
  }
}
</style>
