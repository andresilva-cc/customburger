<script setup lang="ts">
import { reactive, computed } from 'vue'

type Categories = Array<{
  name: string,
  isExpanded: boolean,
  options: Array<{
    name: string,
    iconName: string,
    differentPreviewIcon?: boolean
    isChecked: boolean,
    classes?: string
  }>
}>

const categories: Categories = reactive([
  {
    name: 'Sauces',
    isExpanded: true,
    options: [
      { name: 'Mayo', iconName: 'MayoIngredient', isChecked: true, classes: 'bottom-10 z-[1]' },
      { name: 'Green Mayo', iconName: 'GreenMayoIngredient', isChecked: false, classes: 'bottom-6 z-[1]' }
    ]
  },
  {
    name: 'Meat',
    isExpanded: false,
    options: [
      { name: 'Burger', iconName: 'BurgerIngredient', isChecked: true, classes: 'bottom-12 z-[2]' },
      { name: 'Chicken', iconName: 'ChickenIngredient', isChecked: false, classes: 'bottom-12 z-[2]' },
      { name: 'Bacon', iconName: 'BaconIngredient', differentPreviewIcon: true, isChecked: true, classes: 'bottom-12 z-[4]' }
    ]
  },
  {
    name: 'Cheese',
    isExpanded: false,
    options: [
      { name: 'Cheese', iconName: 'CheeseIngredient', isChecked: true, classes: 'bottom-12 z-[3]' }
    ]
  },
  {
    name: 'Vegetables',
    isExpanded: false,
    options: [
      { name: 'Lettuce', iconName: 'LettuceIngredient', differentPreviewIcon: true, isChecked: true, classes: 'bottom-20 z-[5]' },
      { name: 'Onion', iconName: 'OnionIngredient', differentPreviewIcon: true, isChecked: true, classes: 'bottom-20 z-[5]' },
      { name: 'Pickle', iconName: 'PickleIngredient', differentPreviewIcon: true, isChecked: true, classes: 'bottom-24 z-[5]' },
      { name: 'Tomato', iconName: 'TomatoIngredient', differentPreviewIcon: true, isChecked: true, classes: 'bottom-16 z-[4]' }
    ]
  }
])

const ingredients = computed(() => {
  return categories.flatMap((category) => {
    return category.options
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
</script>

<template>
  <main class="flex flex-col h-full px-16 pb-16">
    <h1 class="py-8 font-heading text-2xl text-center uppercase">
      Make Your Burger
    </h1>
    <div class="flex-1 flex justify-center items-center">
      <div class="flex-1">
        <div class="relative w-[300px] h-[300px] mx-auto rounded-lg">
          <UpperBreadIngredient class="absolute w-full h-auto bottom-36 z-10" />
          <IngredientTransition
            v-for="(ingredient, index) in ingredients"
            :key="index"
          >
            <component
              :is="`${ingredient.differentPreviewIcon ? 'Preview' : ''}${ingredient.iconName}`"
              v-if="ingredient.isChecked"
              class="absolute w-full h-auto"
              :class="ingredient.classes"
            />
          </IngredientTransition>
          <LowerBreadIngredient class="absolute w-full h-auto bottom-0 " />
        </div>
      </div>

      <aside class="w-[300px] z-10">
        <div class="flex flex-col gap-6 py-6 px-4 bg-light-50 rounded-lg">
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
                v-for="(option, index) in category.options"
                :key="option.name"
                v-model="option.isChecked"
                :icon-name="option.iconName"
                :bordered="index < category.options.length - 1"
              >
                {{ option.name }}
              </CbOption>
            </template>
          </CbExpansionPanel>
        </div>
        <CbButton class="mt-6" to="/done">
          That's The Way I Like It
        </CbButton>
      </aside>
    </div>
  </main>
</template>
