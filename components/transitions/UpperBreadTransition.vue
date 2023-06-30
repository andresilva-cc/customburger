<script setup lang="ts">
const windowHeight = computed(() => {
  if (process.client) {
    return `-${window.innerHeight}px`
  }

  return null
})
</script>

<template>
  <Transition name="upper-bread">
    <slot />
  </Transition>
</template>

<style lang="postcss">
.upper-bread-enter-from {
  transform: translateY(v-bind(windowHeight));
}

.upper-bread-enter-to {
  transform: translateY(0);
}
</style>
