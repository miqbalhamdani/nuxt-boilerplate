<script setup>
import * as TablerIcons from "@tabler/icons-vue";

const props = defineProps({
  label: {
    type: String,
    default: null,
  },
  icon: {
    type: String,
    default: "",
  },
  leftIcon: {
    type: String,
    default: "",
  },
  rightIcon: {
    type: String,
    default: "",
  },
  size: {
    type: String,
    default: "medium",
  },
  type: {
    type: String,
    default: "default",
  },
  onClick: {
    type: Function,
    default: () => {},
  },
});
const buttonClasses = computed(() => `button --${props.type} --${props.size}`);
const getIconComponent = (iconName) => TablerIcons[iconName];
const leftIconComponent = computed(() => getIconComponent(props.leftIcon));
const rightIconComponent = computed(() => getIconComponent(props.rightIcon));
const iconComponent = computed(() => getIconComponent(props.icon));
const handleClick = () => {
  props.onClick();
};
</script>

<template>
  <button :class="buttonClasses" @click="handleClick">
    <component :is="leftIconComponent"></component>
    <component :is="iconComponent"></component>
    <span v-if="label">{{ label }}</span>
    <component :is="rightIconComponent"></component>
  </button>
  <!-- <q-btn :class="buttonClasses" @click="handleClick">
    <component :is="leftIconComponent"></component>
    <component :is="iconComponent"></component>
    <span v-if="label">{{ label }}</span>
    <component :is="rightIconComponent"></component>
  </q-btn> -->
</template>

<style lang="scss" scoped>
@import url("./button.scss");
</style>
