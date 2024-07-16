<script setup lang="ts">
import { ref } from "vue";
import { languageOptions, speakerOptions } from "../../../utils/constants";
import { useTtsStore } from "../../../store/tts";
import { storeToRefs } from "pinia";

type OptionType = { value: string; label: string };

const ttsStore = useTtsStore();
const { state } = storeToRefs(ttsStore);
const styleOptions = ref<OptionType[]>([]);
const roleOptions = ref<OptionType[]>([]);
const useStyleAndRoleOptions = (value: string) => {
  const speaker = speakerOptions.find((item) => item.value === value);
  styleOptions.value = speaker?.styles || [];
  roleOptions.value = speaker?.roles || [];
};
useStyleAndRoleOptions(state.value.speaker);
</script>
<template>
  <div class="tts-form" :inline="true" label-width="140px">
    <el-form>
      <el-form-item label="Language">
        <el-select
          v-model="state.language"
          placeholder="please select"
          class="form-item"
        >
          <el-option
            v-for="item in languageOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </el-form-item>
      <el-form-item label="Speaker">
        <el-select
          v-model="state.speaker"
          placeholder="please select"
          class="form-item"
          @change="useStyleAndRoleOptions"
        >
          <el-option
            v-for="item in speakerOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </el-form-item>
      <el-form-item v-if="styleOptions.length" label="Style">
        <el-select
          v-model="state.style"
          placeholder="please select"
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
      <el-form-item v-if="roleOptions.length" label="Role">
        <el-select
          v-model="state.role"
          placeholder="please select"
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
      <el-form-item label="Rate">
        <el-slider
          v-model="state.rate"
          :min="0"
          :max="100"
          size="small"
          class="form-item-slider"
        />
      </el-form-item>
      <el-form-item label="Pitch">
        <el-slider
          v-model="state.pitch"
          :min="0"
          :max="100"
          size="small"
          class="form-item-slider"
        />
      </el-form-item>
    </el-form>
  </div>
</template>
<style scoped lang="scss">
.tts-form {
  padding: 0 5px;
  display: flex;
  flex-direction: column;
  flex: 1;
  margin: 10px 0;
  .form-item {
    width: 160px;
    margin-left: auto;
  }
  .form-item-slider {
    width: 150px;
    margin-left: auto;
  }
}
</style>
