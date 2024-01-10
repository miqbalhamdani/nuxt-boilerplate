<script setup>
import { IconInfoCircle, IconInfoTriangleFilled } from "@tabler/icons-vue";

const props = defineProps({
    placeholder: {
        type: String,
        default: 'placeholder'
    },
    label: {
        type: String,
        default: 'Label',
    },
    supportText: {
        type: String,
        default: '',
    },
    characterText: {
        type: String,
        default: '',
    },
    maxLength: {
        type: Number,
        default: null,
    },
    tooltip: {
        type: String,
        default: '',
    },
    hasError: {
        type: Boolean,
        default: false,
    },
    modelValue: {
        type: String,
        default: '',
    },
});

const emits = defineEmits(['update:modelValue']);
const text = ref(props.modelValue);
watch(text, (newValue) => {
    emits('update:modelValue', newValue);
});
</script>

<template>
    <div class="container">
        <div class="header">
            <label>{{ label }}</label>
            <div v-if="tooltip" class="inline cursor-pointer">
                <IconInfoCircle />
                <q-tooltip>
                    {{ tooltip }}
                </q-tooltip>
            </div>
        </div>
        <q-input
            v-model="text"
            outlined
            type="textarea"
            :placeholder="placeholder"
            :maxLength="maxLength"
            :class="[ 'ktv-textarea', { 'error': hasError } ]"
        />
        <IconInfoTriangleFilled v-if="hasError" class="icon-error" />
        <div v-if="supportText || characterText" class="footer">
            <span>{{ supportText }}</span>
            <span>{{ characterText }}</span>
        </div>
    </div>
</template>

<style lang="scss">
@import url("./textarea.scss");
</style>

<style lang="scss" scoped>
@import "@/assets/scss/_variable.scss";

.container {
    position: relative;
    .header {
        display: flex;
        justify-content: space-between;
        margin-bottom: 4px;
        svg {
            width: 16px;
            height: 16px;
            color: #9F9FA0;
        }
    }
    .footer {
        display: flex;
        justify-content: space-between;
        margin-top: 4px;
        span {
            color: $black-40;
            font-size: 12px;
            font-weight: 400;
            line-height: 16px;
            letter-spacing: 0.4px;
        }
    }
}
</style>