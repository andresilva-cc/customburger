<template>
  <component
    :is="component.tag"
    v-bind="component.attributes"
    class="flex items-center justify-center h-10 rounded-lg uppercase"
    :class="colorClasses[props.color]"
  >
    <slot />
  </component>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  color?: 'primary' | 'secondary' | 'light',
  to?: string
}

const props = withDefaults(defineProps<Props>(), {
  color: 'primary',
  to: undefined
})

const component = computed(() => {
  if (props.to) {
    return {
      tag: resolveComponent('NuxtLink'),
      attributes: {
        to: props.to
      }
    }
  }

  return {
    tag: 'button',
    attributes: {
      type: 'button'
    }
  }
})

const colorClasses = {
  primary: 'bg-primary-500 hover:bg-primary-600 active:bg-primary-700 text-white',
  secondary: 'bg-secondary-500 hover:bg-secondary-600 active:bg-secondary-700 text-gray-900',
  light: 'bg-light-50 hover:bg-light-100 active:bg-light-200 text-gray-900'
}
</script>
