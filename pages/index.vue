<script setup>
import KtvButton from "~/components/button/Button.vue";
import KtvTextField from "~/components/form/input/Input.vue";
import KtvTextarea from "@/components/form/textarea/Textarea.vue";
import KtvInputSelect from "~/components/form/input-select/InputSelect.vue";

const TestingTextArea = ref("");
const TextAreaIsValid = computed(() => TestingTextArea.value.length <= 3);

const TestingTextField = ref("");
const TestingIsValid = computed(() => TestingTextField.value.length <= 3);

const inputKoltiva = ref("");
const KoltivaIsValid = computed(() => inputKoltiva.value.length <= 15);

const TestingInputSelect = ref("");
const InputSelectIsValid = computed(() => TestingInputSelect.value.length <= 7);

let dataTextArea = "";
</script>

<template>
  <div style="display: flex; flex-direction: column; row-gap: 24px">
    <h1 class="d-flex justify-content-center fs-3 fw-bold text-secondary">
      Nuxt Koltiva Boilerplate
    </h1>

    <div class="d-flex">
      <KtvTextarea
        v-model="TestingTextArea"
        label="Testing Label"
        tooltip="Testing Tooltip Text"
        placeholder="Testing Placeholder"
        hint="Testing Supporting Text"
        :errorValidation="!TextAreaIsValid"
        errorMessage="Testing Error Message"
        maxlength="100"
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
        v-model="TestingTextField"
        label="Testing Label"
        tooltip="Testing Tooltip Text"
        placeholder="Testing Placeholder"
        hint="Testing Supporting Text"
        icon
        :errorValidation="!TestingIsValid"
        errorMessage="Testing Error Message"
      />
      <KtvTextField
        v-model="inputKoltiva"
        label="Label Koltiva"
        tooltip="Tooltip Text Koltiva"
        placeholder="Placeholder Koltiva"
        hint="Supporting Text Koltiva"
        type="number"
        icon
        :errorValidation="!KoltivaIsValid"
        errorMessage="Error Message Koltiva"
      />
    </div>
    <div class="d-flex">
      <KtvInputSelect
        v-model="TestingInputSelect"
        label="Testing Input Select"
        tooltip="Testing Tooltip Input Select"
        placeholder="Placeholder Input Select"
        hint="Supporting Input Select"
        :errorValidation="!InputSelectIsValid"
        errorMessage="Testing Error Message"
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
