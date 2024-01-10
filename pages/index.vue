<script setup>
import KtvButton from "~/components/button/Button.vue";
import KtvTextField from "~/components/form/input/Input.vue";
import KtvTextarea from "@/components/form/textarea/Textarea.vue";
import KtvInputSelect from "~/components/form/input-select/InputSelect.vue";
import KtvSelect from "~/components/form/select/Select.vue";

const select = ref("");
const selectIsValid = computed(() => select.value.length <= 3);

const textarea = ref("");
const textareaIsValid = computed(() => textarea.value.length <= 3);

const textField = ref("");
const textFieldIsValid = computed(() => textField.value.length <= 3);

const inputSelect = ref("");
const inputSelectIsValid = computed(() => inputSelect.value.length <= 7);

let dataOptions = ["Test1", "Test2", "Test3", "Test3", "Test3"];

provide("dataOptions", dataOptions);
// const options = ref(dataOptions);
</script>

<template>
  <div style="display: flex; flex-direction: column; row-gap: 24px">
    <h1 class="d-flex justify-content-center fs-3 fw-bold text-secondary">
      Nuxt Koltiva Boilerplate
    </h1>

    <div class="d-flex">
      <KtvSelect
        v-model="select"
        label="Select"
        tooltip="Tooltip Select"
        placeholder="Placeholder Select"
        hint="Supporting Select"
        :errorValidation="!selectIsValid"
        errorMessage="Error Message"
        :options="dataOptions"
      />
    </div>
    <div class="d-flex">
      <KtvTextarea
        v-model="textarea"
        label="Textarea"
        tooltip="Tooltip Textarea"
        placeholder="Placeholder Textarea"
        hint="Supporting Textarea"
        :errorValidation="!textareaIsValid"
        errorMessage="Error Message"
        maxlength="50"
        counter
      />
    </div>
    <div class="d-flex">
      <KtvButton label="nastar"></KtvButton>
      <KtvButton label="nastar" type="accent-danger" size="small"></KtvButton>
      <KtvButton icon="IconHome" iconOnly></KtvButton>
      <KtvButton
        label="Button Small"
        leftIcon="IconHome"
        size="small"
      ></KtvButton>
      <KtvButton label="nastar" rightIcon="Icon360"></KtvButton>
      <KtvButton
        label="nastar"
        leftIcon="Icon123"
        rightIcon="IconCube"
        size="large"
      ></KtvButton>
    </div>
    <div class="d-flex">
      <KtvTextField
        v-model="textField"
        label="Textfield"
        tooltip="Tooltip Textfield"
        placeholder="Placeholder Textfield"
        hint="Supporting Textfield"
        icon
        :errorValidation="!textFieldIsValid"
        errorMessage="Error Message"
      />
    </div>
    <div class="d-flex">
      <KtvInputSelect
        v-model="inputSelect"
        label="Input Select"
        tooltip="Tooltip Input Select"
        placeholder="Placeholder Input Select"
        hint="Supporting Input Select"
        :errorValidation="!inputSelectIsValid"
        errorMessage="Error Message"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.d-flex {
  display: flex;
  flex-direction: row;
  gap: 24px;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
</style>
