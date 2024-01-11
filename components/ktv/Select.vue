<script setup lang="ts">
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

const props = defineProps({
  options: {
    type: Object,
    required: true,
  },
  placeholder: {
    type: String,
    default: '',
  },
});
</script>

<template>
  <Select>
    <SelectTrigger>
      <SelectValue :placeholder="placeholder" />
    </SelectTrigger>
    <SelectContent>
      <SelectGroup>
        <SelectItem 
          v-for="(option, index) in props.options" 
          :key="index"
          :value="option.value"
        >
          {{option.label}}
        </SelectItem>
      </SelectGroup>
    </SelectContent>
  </Select>
</template>