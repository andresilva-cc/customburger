<script setup lang="ts">
import { reactive, watch } from 'vue'

type Categories = Array<{
  title: string,
  isExpanded: boolean,
  options: Array<{
    name: string,
    isChecked: boolean
  }>
}>

const categories: Categories = reactive([
  {
    title: 'Vegetables',
    isExpanded: true,
    options: [
      { name: 'Lettuce', isChecked: false },
      { name: 'Onion', isChecked: false },
      { name: 'Pickle', isChecked: false },
      { name: 'Tomato', isChecked: false }
    ]
  },
  {
    title: 'Sauces',
    isExpanded: false,
    options: [
      { name: 'Mayo', isChecked: false },
      { name: 'Green Mayo', isChecked: false }
    ]
  },
  {
    title: 'Cheese',
    isExpanded: false,
    options: [
      { name: 'Cheese', isChecked: false }
    ]
  },
  {
    title: 'Meat',
    isExpanded: false,
    options: [
      { name: 'Burger', isChecked: false },
      { name: 'Chicken', isChecked: false },
      { name: 'Bacon', isChecked: false }
    ]
  }
])
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
            :key="category.title"
            v-model="category.isExpanded"
          >
            <template #title>
              {{ category.title }}
            </template>
            <template #content>
              <CbOption
                v-for="(option, index) in category.options"
                :key="option.name"
                v-model="option.isChecked"
                :icon-name="`${option.name.split(' ').join('')}Ingredient`"
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
