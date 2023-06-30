<script setup lang="ts">
interface Props {
  color?: 'primary' | 'secondary' | 'light',
  to?: string
  disabled?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  color: 'primary',
  to: undefined,
  disabled: false
})

const component = computed(() => {
  if (props.to) {
    return {
      tag: resolveComponent('NuxtLink'),
      attributes: {
        to: props.disabled ? '' : props.to
      }
    }
  }

  return {
    tag: 'button',
    attributes: {
      type: 'button',
      disabled: props.disabled
    }
  }
})

const colorClasses = {
  primary: {
    base: 'bg-primary-500 text-white',
    hover: 'hover:bg-primary-600',
    active: 'active:bg-primary-700'
  },
  secondary: {
    base: 'bg-secondary-500 text-gray-900',
    hover: 'hover:bg-secondary-600',
    active: 'active:bg-secondary-700'
  },
  light: {
    base: 'bg-light-50 text-gray-900',
    hover: 'hover:bg-light-100',
    active: 'active:bg-light-200'
  }
}
</script>

<template>
  <component
    :is="component.tag"
    v-bind="component.attributes"
    class="flex w-full items-center justify-center h-10 rounded-lg uppercase select-none transition hover:transition-none"
    :class="[
      colorClasses[props.color].base,
      {
        'opacity-50': props.disabled,
        [colorClasses[props.color].hover]: !props.disabled,
        [colorClasses[props.color].active]: !props.disabled
      }
    ]"
  >
    <slot />
  </component>
</template>
