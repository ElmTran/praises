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
  const language = languageOptions.value.find((item) => item.value === value);
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
</script>
<template>
  <div class="form-container" :inline="true" label-width="140px">
    <el-form>
      <el-form-item>
        <template #label>
          <span class="item-label">
            {{ $t("tts.form.language") }}
          </span>
        </template>
        <el-select
          v-model="state.language"
          class="form-item"
          :placeholder="$t('tts.form.placeholder.language')"
          :popper-append-to-body="false"
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
            {{ $t("tts.form.speaker") }}
          </span>
        </template>
        <el-select
          v-model="state.speaker"
          class="form-item"
          :placeholder="$t('tts.form.placeholder.speaker')"
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
            {{ $t("tts.form.style") }}
          </span>
        </template>
        <el-select
          v-model="state.style"
          :placeholder="$t('tts.form.placeholder.style')"
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
            {{ $t("tts.form.role") }}
          </span>
        </template>
        <el-select
          v-model="state.role"
          :placeholder="$t('tts.form.placeholder.role')"
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
            {{ $t("tts.form.rate") }}
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
            {{ $t("tts.form.pitch") }}
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
          :placeholder="$t('tts.form.placeholder.template')"
          style="width: 140px"
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
        <p class="btnLabel">{{ $t("tts.form.save") }}</p>
      </button>
    </div>
  </div>
</template>
<style scoped lang="scss">
.form-container {
  display: flex;
  flex-direction: column;
  flex: 1;
  .el-form {
    .item-label {
      font-size: 14px;
      color: rgba(244, 91, 91, 0.8);
    }
    .form-item {
      width: 160px;
      margin-left: auto;
    }
    .form-item-slider {
      width: 150px;
      margin-left: auto;
    }
    :deep(.el-select__wrapper) {
      padding: 0.2rem 1rem;
    }
  }
  .control-bar {
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: space-between;
    :deep(.el-select__wrapper) {
      padding: 0.8rem;
    }
    .saveBtn {
      width: 100px;
      height: 40px;
      border-radius: 40px;
      border: none;
      box-shadow: 0 2px 12px 3px rgba(0, 0, 0, 0.1);
      background-color: transparent;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      transition-duration: 0.3s;
      overflow: hidden;
    }

    .IconContainer {
      width: 30px;
      height: 30px;
      background: linear-gradient(
        to bottom,
        rgba(172, 255, 136, 0.8),
        rgba(70, 255, 73, 0.8)
      );
      border-radius: 50px;
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
      z-index: 2;
      transition-duration: 0.3s;
    }

    .icon {
      border-radius: 1px;
    }

    .btnLabel {
      height: 100%;
      width: 60px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      z-index: 1;
      transition-duration: 0.3s;
      font-size: 1.04em;
    }

    .saveBtn:hover .IconContainer {
      width: 90px;
      transition-duration: 0.3s;
    }

    .saveBtn:hover .btnLabel {
      transform: translate(10px);
      width: 0;
      font-size: 0;
      transition-duration: 0.3s;
    }

    .saveBtn:active {
      transform: scale(0.95);
      transition-duration: 0.3s;
    }
  }
}
</style>
