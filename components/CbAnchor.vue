<script setup lang="ts">
interface Props {
  href?: string,
  target?: '_blank' | '_self' | '_parent' | '_top' | string
}

const props = withDefaults(defineProps<Props>(), {
  href: '',
  target: '_self'
})
</script>

<template>
  <a
    v-bind="props"
    class="underline text-primary-500 hover:text-primary-600 active:text-primary-700 transition hover:transition-none"
  >
    <slot />
  </a>
</template>
