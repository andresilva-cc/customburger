<script setup lang="ts">
let initialHeight = ''

function onBeforeEnter (element: HTMLElement) {
  initialHeight = element.style.height
}

function onEnter (element: HTMLElement) {
  const offset = `${element.offsetHeight}px`
  element.style.height = '0'

  requestAnimationFrame(() => {
    element.style.height = offset
  })
}

function onLeave (element: HTMLElement) {
  initialHeight = element.style.height
  element.style.height = `${element.offsetHeight}px`

  requestAnimationFrame(() => (element.style.height = '0'))
}

function resetHeight (element: HTMLElement) {
  if (initialHeight != null) { element.style.height = initialHeight }
}
</script>

<template>
  <Transition
    @before-enter="onBeforeEnter($event as HTMLElement)"
    @enter="onEnter($event as HTMLElement)"
    @after-enter="resetHeight($event as HTMLElement)"
    @leave="onLeave($event as HTMLElement)"
    @enter-cancelled="resetHeight($event as HTMLElement)"
    @after-leave="resetHeight($event as HTMLElement)"
    @leave-cancelled="resetHeight($event as HTMLElement)"
  >
    <slot />
  </Transition>
</template>
