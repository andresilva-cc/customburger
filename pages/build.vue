<script setup lang="ts">
import { reactive } from 'vue'

type Categories = Array<{
  name: string,
  isExpanded: boolean,
  options: Array<{
    name: string,
    iconName: string,
    isChecked: boolean
  }>
}>

const categories: Categories = reactive([
  {
    name: 'Vegetables',
    isExpanded: true,
    options: [
      { name: 'Lettuce', iconName: 'LettuceIngredient', isChecked: false },
      { name: 'Onion', iconName: 'OnionIngredient', isChecked: false },
      { name: 'Pickle', iconName: 'PickleIngredient', isChecked: false },
      { name: 'Tomato', iconName: 'TomatoIngredient', isChecked: false }
    ]
  },
  {
    name: 'Sauces',
    isExpanded: false,
    options: [
      { name: 'Mayo', iconName: 'MayoIngredient', isChecked: false },
      { name: 'Green Mayo', iconName: 'GreenMayoIngredient', isChecked: false }
    ]
  },
  {
    name: 'Cheese',
    isExpanded: false,
    options: [
      { name: 'Cheese', iconName: 'CheeseIngredient', isChecked: false }
    ]
  },
  {
    name: 'Meat',
    isExpanded: false,
    options: [
      { name: 'Burger', iconName: 'BurgerIngredient', isChecked: false },
      { name: 'Chicken', iconName: 'ChickenIngredient', isChecked: false },
      { name: 'Bacon', iconName: 'BaconIngredient', isChecked: false }
    ]
  }
])

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
        <div class="w-[300px] h-[300px] mx-auto bg-secondary-500 rounded-lg" />
      </div>
      <aside class="w-[300px]">
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
