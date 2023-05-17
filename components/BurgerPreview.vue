<script setup lang="ts">
import type { Ingredient } from '~/types/Ingredient'

interface Props {
  ingredients: Array<Ingredient>,
  isAnimationInProgress?: boolean
  hasFinished?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  isAnimationInProgress: false,
  hasFinished: false
})
</script>

<template>
  <div class="flex items-end justify-center w-full h-full rounded-lg">
    <div class="relative w-full max-w-[300px]">
      <UpperBreadTransition>
        <UpperBreadIngredient
          v-if="props.hasFinished"
          class="relative w-full h-auto z-10 transition-all bottom-12 duration-1000"
        />
      </UpperBreadTransition>
      <IngredientTransition
        v-for="(ingredient, index) in props.ingredients"
        :key="index"
        :distance="ingredient.distance"
        :distance-when-animating="ingredient.distanceWhenAnimating"
      >
        <component
          :is="`${ingredient.differentPreviewIcon ? 'Preview' : ''}${ingredient.iconName}`"
          v-if="ingredient.isChecked"
          class="absolute w-full h-auto transition-all"
          :class="ingredient.zIndex"
          :style="{ transform: `translateY(${isAnimationInProgress ? ingredient.distanceWhenAnimating : ingredient.distance}px)` }"
        />
      </IngredientTransition>
      <LowerBreadIngredient
        class="relative -z-10 w-full h-auto transition-all duration-200"
        :class="[isAnimationInProgress ? '-bottom-5' : 'bottom-0']"
      />
    </div>
  </div>
</template>
