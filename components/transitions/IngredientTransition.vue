<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  distance: number,
  distanceWhenAnimating: number
}

const props = defineProps<Props>()

const windowWidth = computed(() => {
  if (process.client) {
    return `${window.innerWidth}px`
  }

  return null
})
</script>

<template>
  <Transition name="ingredient">
    <slot ref="element" />
  </Transition>
</template>

<style lang="postcss">
.ingredient-enter-active {
  animation: ingredient-enter 1s;
}

.ingredient-leave-active {
  animation: ingredient-leave 1s;
}

@keyframes ingredient-enter {
  0% {
    transform: translate(v-bind('`-${windowWidth}`'), v-bind('`${props.distanceWhenAnimating}px`'));
  }
  80% {
    transform: translate(0px, v-bind('`${props.distanceWhenAnimating}px`'));
  }
  100% {
    transform: translate(0px,v-bind('`${props.distance}px`'));
  }
}

@keyframes ingredient-leave {
  0% {
    transform: translate(0px, v-bind('`${props.distance}px`'));
  }
  20% {
    transform: translate(0px, v-bind('`${props.distanceWhenAnimating}px`'));
  }
  100% {
    transform: translate(v-bind(windowWidth), v-bind('`${props.distanceWhenAnimating}px`'));
  }
}
</style>
