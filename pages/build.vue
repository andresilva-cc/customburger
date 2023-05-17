<script setup lang="ts">
import { ref, reactive, computed } from 'vue'
import type { Ingredient } from '~/types/Ingredient'

type Categories = Array<{
  name: string,
  isExpanded: boolean,
  ingredients: Array<Ingredient>
}>

const router = useRouter()

const isAnimationInProgress = ref(false)
const hasFinished = ref(false)

const categories: Categories = reactive([
  {
    name: 'Sauces',
    isExpanded: true,
    ingredients: [
      { name: 'Mayo', iconName: 'MayoIngredient', isChecked: false, zIndex: 'z-[1]', distance: -28, distanceWhenAnimating: -8 },
      { name: 'Green Mayo', iconName: 'GreenMayoIngredient', isChecked: false, zIndex: 'z-[1]', distance: -26, distanceWhenAnimating: -48 }
    ]
  },
  {
    name: 'Meat',
    isExpanded: false,
    ingredients: [
      { name: 'Burger', iconName: 'BurgerIngredient', isChecked: false, zIndex: 'z-[2]', distance: -60, distanceWhenAnimating: -72 },
      { name: 'Chicken', iconName: 'ChickenIngredient', isChecked: false, zIndex: 'z-[2]', distance: -60, distanceWhenAnimating: -72 },
      { name: 'Bacon', iconName: 'BaconIngredient', differentPreviewIcon: true, isChecked: false, zIndex: 'z-[4]', distance: -80, distanceWhenAnimating: -112 }
    ]
  },
  {
    name: 'Cheese',
    isExpanded: false,
    ingredients: [
      { name: 'Cheese', iconName: 'CheeseIngredient', isChecked: false, zIndex: 'z-[3]', distance: -128, distanceWhenAnimating: -172 }
    ]
  },
  {
    name: 'Vegetables',
    isExpanded: false,
    ingredients: [
      { name: 'Lettuce', iconName: 'LettuceIngredient', differentPreviewIcon: true, isChecked: false, zIndex: 'z-[5]', distance: -64, distanceWhenAnimating: -108 },
      { name: 'Onion', iconName: 'OnionIngredient', differentPreviewIcon: true, isChecked: false, zIndex: 'z-[5]', distance: -100, distanceWhenAnimating: -148 },
      { name: 'Pickle', iconName: 'PickleIngredient', differentPreviewIcon: true, isChecked: false, zIndex: 'z-[5]', distance: -48, distanceWhenAnimating: -92 },
      { name: 'Tomato', iconName: 'TomatoIngredient', differentPreviewIcon: true, isChecked: false, zIndex: 'z-[4]', distance: -72, distanceWhenAnimating: -124 }
    ]
  }
])

const ingredients = computed(() => {
  return categories.flatMap((category) => {
    return category.ingredients
  })
})

function onUpdateExpanded (newValue: boolean, name: string) {
  categories.forEach((category) => {
    if (category.name === name) {
      category.isExpanded = newValue
      return
    }

    category.isExpanded = false
  })
}

function onUpdateOption (newValue: boolean) {
  isAnimationInProgress.value = true

  const ms = newValue ? 800 : 600

  setTimeout(() => {
    isAnimationInProgress.value = false
  }, ms)
}

function finish () {
  hasFinished.value = true

  setTimeout(() => {
    router.push('/done')
  }, 2000)
}
</script>

<template>
  <main class="flex flex-col h-full md:px-16 md:pb-16 overflow-hidden">
    <h1 class="py-4 md:py-8 font-heading text-2xl text-center uppercase">
      Make Your Burger
    </h1>
    <div class="flex-1 flex flex-col md:flex-row justify-between md:justify-center items-center">
      <div class="flex-1 w-full mb-8 md:mb-0">
        <BurgerPreview
          :ingredients="ingredients"
          :is-animation-in-progress="isAnimationInProgress"
          :has-finished="hasFinished"
        />
      </div>

      <aside class="w-full bottom-0 md:w-[300px] z-10">
        <div class="flex flex-col gap-3 md:gap-6 py-3 md:py-6 px-4 bg-light-50 resize-y rounded-t-lg md:rounded-lg">
          <CbExpansionPanel
            v-for="category in categories"
            :key="category.name"
            :model-value="category.isExpanded"
            @update:model-value="onUpdateExpanded($event, category.name)"
          >
            <template #title>
              {{ category.name }}
            </template>

            <template #content>
              <CbOption
                v-for="(ingredient, index) in category.ingredients"
                :key="ingredient.name"
                v-model="ingredient.isChecked"
                :icon-name="ingredient.iconName"
                :bordered="index < category.ingredients.length - 1"
                @update:model-value="onUpdateOption($event)"
              >
                {{ ingredient.name }}
              </CbOption>
            </template>
          </CbExpansionPanel>
        </div>

        <CbButton class="rounded-none md:rounded-lg md:mt-6" :disabled="hasFinished" @click="finish">
          That's The Way I Like It
        </CbButton>
      </aside>
    </div>
  </main>
</template>
