<script setup lang="ts">
import type { AnimationDirection } from '~/types/AnimationDirection'
import type { Ingredient } from '~/types/Ingredient'

interface Props {
  ingredients: Array<Ingredient>,
  isAnimationInProgress?: boolean
  animationDirection: AnimationDirection
  hasFinished?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  isAnimationInProgress: false,
  hasFinished: false
})

function getDistance (ingredient: Ingredient): number {
  // return ingredient.distances[0].distanceWhenAnimating
  const defaultDistance = ingredient.distances[0].distance

  if (props.isAnimationInProgress) {
    if (props.animationDirection === 'exiting') {
      return ingredient.previousDistance?.distanceWhenAnimating || defaultDistance
    }

    return ingredient.currentDistance?.distanceWhenAnimating || defaultDistance
  }

  return ingredient.currentDistance?.distance || defaultDistance
}
</script>

<template>
  <div class="flex items-end justify-center w-full h-full rounded-lg">
    <div class="relative w-full max-w-[300px]">
      <UpperBreadTransition>
        <UpperBreadIngredient
          v-if="props.hasFinished"
          class="absolute w-full h-auto z-10 transition-all bottom-32 duration-1000"
        />
      </UpperBreadTransition>
      <IngredientTransition
        v-for="(ingredient, index) in props.ingredients"
        :key="index"
        :distance="ingredient.currentDistance?.distance || 0"
        :distance-when-animating="ingredient.currentDistance?.distanceWhenAnimating || 0"
      >
        <component
          :is="`${ingredient.hasDifferentPreviewIcon ? 'Preview' : ''}${ingredient.iconName}`"
          v-if="ingredient.isChecked"
          class="absolute w-full h-auto transition-all"
          :style="{ zIndex: ingredient.zIndex, transform: `translateY(${getDistance(ingredient)}px)` }"
        />
      </IngredientTransition>
      <LowerBreadIngredient
        class="relative -z-10 w-full h-auto transition-all duration-200"
        :class="[isAnimationInProgress ? '-bottom-5' : 'bottom-0']"
      />
    </div>
  </div>
</template>
