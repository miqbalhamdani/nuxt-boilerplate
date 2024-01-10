<script setup>
const props = defineProps({
  modelValue: {
    type: [String, Number],
    required: true,
  },
  label: {
    type: String,
    default: "Label",
  },
  tooltip: {
    type: [Boolean, String],
    default: [false, "Text Tooltip"],
  },
  placeholder: {
    type: String,
    default: "Placeholder",
  },
  hint: {
    type: String,
    default: "Supporting Text",
  },
  type: {
    type: String,
    default: "text",
  },
  errorValidation: {
    type: [Boolean],
    default: false,
  },
  errorMessage: {
    type: String,
    default: "Error Message",
  },
  disable: Boolean,
});
import {
  IconInfoCircle,
  IconCircleX,
  IconAlertTriangleFilled,
  IconChevronDown,
} from "@tabler/icons-vue";
const modelValue = ref("");
const resetText = () => {
  modelValue.value = "";
};
// Props V-Model
const emit = defineEmits(["update:modelValue"]);
const model = ref(modelValue);
watch(model, (newValue) => {
  emit("update:modelValue", newValue);
});

// Select
const modelSelect = ref("Pilih");
const stringOptions = ["cm", "mm", "kg"];
const options = ref(stringOptions);
const filterFn = (val, update, abort) => {
  update(() => {
    const needle = val.toLowerCase();
    options.value = stringOptions.filter(
      (v) => v.toLowerCase().indexOf(needle) > -1
    );
  });
};
</script>

<template>
  <div class="ktv-input-select">
    <div
      class="ktv-d-flex ktv-justify-content-between ktv-align-items-center label-input"
    >
      <label>{{ label }}</label>
      <div style="height: 16px" v-if="tooltip">
        <IconInfoCircle />
        <q-tooltip
          transition-show="scale"
          transition-hide="scale"
          :offset="[0, 3]"
        >
          {{ tooltip }}
        </q-tooltip>
      </div>
    </div>
    <q-input
      v-model="modelValue"
      :hint="hint"
      :placeholder="placeholder"
      :type="type"
      :error="errorValidation"
      :disable="disable"
      outlined
      clearable
      no-error-icon
      no-clear-icon
      hide-bottom-space
      class="ktv-custom-input"
    >
      <template #append>
        <IconCircleX
          v-if="modelValue.length >= 1"
          @click.stop.prevent="resetText"
          class="cursor-pointer icon-close"
        />
        <IconAlertTriangleFilled v-if="errorValidation" />
        <q-select
          borderless
          fill-input
          v-model="modelSelect"
          input-debounce="0"
          :options="options"
          @filter="filterFn"
          class="ktv-custom-select"
          hide-dropdown-icon
        >
          <template #append>
            <IconChevronDown />
          </template>
        </q-select>
      </template>
      <template #error> {{ errorMessage }} </template>
    </q-input>
  </div>
</template>

<style lang="scss">
@import url("./input-select.scss");
</style>
