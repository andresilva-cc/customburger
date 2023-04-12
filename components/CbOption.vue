<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  modelValue: boolean,
  iconName: string,
  bordered?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  bordered: false
})

const emit = defineEmits<{(e: 'update:modelValue', value: boolean): void}>()

const isChecked = computed({
  get () {
    return props.modelValue
  },
  set (value) {
    emit('update:modelValue', value)
  }
})

const IconComponent = resolveComponent(props.iconName)
</script>

<template>
  <div
    class="flex items-center h-12"
    :class="{ 'border-b-[1px] border-b-gray-900 border-opacity-20': props.bordered }"
  >
    <div class="flex-1">
      <slot />
    </div>
    <component :is="IconComponent" class="w-8 h-8 mr-4" />
    <CbCheckbox
      v-model="isChecked"
    />
  </div>
</template>
