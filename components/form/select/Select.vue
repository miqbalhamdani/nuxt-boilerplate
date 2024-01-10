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
  options: {
    type: Array,
    default: null,
  },
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
const dataOptions = inject("dataOptions", ref([]));
console.log(dataOptions);
// let stringOptions = [];
const emit = defineEmits(["update:modelValue"]);
const model = ref(modelValue);
watch(model, (newValue) => {
  emit("update:modelValue", newValue);
});

// const emit2 = defineEmits(["update:stringOptions"]);
// const model2 = ref(options);
// watch(model2, (newValue) => {
//   emit2("update:stringOptions", newValue);
//   console.log(newValue);
// });

// const options = ref(stringOptions);
// const filterFn = (val, update, abort) => {
//   update(() => {
//     console.log(options);
//     const needle = val.toLowerCase();
//     options.value = stringOptions.filter(
//       (v) => v.toLowerCase().indexOf(needle) > -1
//     );
//   });
// };
</script>

<template>
  <div class="ktv-select">
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
    <q-select
      v-model="modelValue"
      use-input
      :hint="hint"
      :placeholder="placeholder"
      :error="errorValidation"
      :disable="disable"
      outlined
      clearable
      no-error-icon
      no-clear-icon
      hide-bottom-space
      input-debounce="0"
      :options="options"
      @filter="filterFn"
      hide-selected
      fill-input
      hide-dropdown-icon
    >
      <template #append>
        <IconCircleX
          v-if="modelValue.length >= 1"
          @click.stop.prevent="resetText"
          class="cursor-pointer icon-close"
        />
        <IconAlertTriangleFilled v-if="errorValidation" />
        <IconChevronDown />
      </template>
      <template #error> {{ errorMessage }} </template>
    </q-select>
  </div>
</template>

<style lang="scss">
@import url("./select.scss");
</style>
