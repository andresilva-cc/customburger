<script setup lang="ts">
import { computed } from 'vue'
import type { Ingredient } from '~/types/Ingredient'

interface Props {
  ingredients: Array<Ingredient>,
  currentAnimatingOption?: string
  hasFinished?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  currentAnimatingOption: '',
  hasFinished: false
})

const isAnimationInProgress = computed(() => {
  return !!props.currentAnimatingOption
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
    >
      <component
        :is="`${ingredient.differentPreviewIcon ? 'Preview' : ''}${ingredient.iconName}`"
        v-if="ingredient.isChecked"
        class="absolute w-full h-auto transition-all"
        :class="ingredient.zIndex"
        :style="{ bottom: `${isAnimationInProgress && props.currentAnimatingOption !== ingredient.name ? index * 40 : ingredient.distance}px` }"
      />
    </IngredientTransition>
    <LowerBreadIngredient
      class="absolute w-full h-auto transition-all"
      :class="[isAnimationInProgress ? '-bottom-10' : 'bottom-0']"
    />
  </div>
</template>
