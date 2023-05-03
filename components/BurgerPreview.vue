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
  <div class="relative w-[300px] h-[300px] mx-auto rounded-lg">
    <UpperBreadTransition>
      <UpperBreadIngredient
        v-if="props.hasFinished"
        class="absolute w-full h-auto z-10 transition-all bottom-36 duration-[2s]"
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
      class="absolute -z-10 w-full h-auto transition-all"
      :class="[isAnimationInProgress ? '-bottom-10' : 'bottom-0']"
    />
  </div>
</template>
