<script setup lang="ts">
import { reactive } from 'vue'

type ExpansionPanels = {
  [key: string]: {
    title: string,
    isExpanded: boolean
  }
}

const expansionPanels: ExpansionPanels = reactive({
  vegetables: {
    title: 'Vegetables',
    isExpanded: true
  },
  sauces: {
    title: 'Sauces',
    isExpanded: false
  },
  cheese: {
    title: 'Cheese',
    isExpanded: false
  },
  meat: {
    title: 'Meat',
    isExpanded: false
  }
})
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
        <div class="flex flex-col gap-6 h-[411px] py-6 px-4 bg-light-50 rounded-lg">
          <CbExpansionPanel
            v-for="key in Object.keys(expansionPanels)"
            :key="key"
            v-model="expansionPanels[key].isExpanded"
          >
            <template #title>
              {{ expansionPanels[key].title }}
            </template>
            <template #content>
              <div>Lettuce</div>
              <div>Tomato</div>
              <div>Onions</div>
              <div>Picles</div>
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
