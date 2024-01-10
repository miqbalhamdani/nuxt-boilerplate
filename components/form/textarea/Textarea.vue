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
  maxlength: Number,
  counter: Boolean,
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
import { IconInfoCircle, IconAlertTriangleFilled } from "@tabler/icons-vue";
const modelValue = ref("");

// Props V-Model
const emit = defineEmits(["update:modelValue"]);
const model = ref(modelValue);
watch(model, (newValue) => {
  emit("update:modelValue", newValue);
});
</script>

<template>
  <div class="ktv-textarea">
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
      :error="errorValidation"
      :disable="disable"
      type="textarea"
      outlined
      no-error-icon
      hide-bottom-space
      autogrow
      :maxlength="maxlength"
      :counter="counter"
    >
      <template #append v-if="errorValidation">
        <IconAlertTriangleFilled />
      </template>
      <template #error> {{ errorMessage }} </template>
    </q-input>
  </div>
</template>

<style lang="scss">
@import url("./textarea.scss");
</style>
