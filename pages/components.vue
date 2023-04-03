<script setup lang="ts">
import { ref } from 'vue'

const isChecked = ref(false)
const isExpanded = ref(false)
</script>

<template>
  <div class="flex flex-col m-8">
    <h1 class="font-heading uppercase text-2xl mb-8">
      Components
    </h1>
    <div class="flex flex-col gap-4 w-64">
      <CbButton color="primary">
        Primary Button
      </CbButton>
      <CbButton color="secondary">
        Secondary Button
      </CbButton>
      <CbButton color="light">
        Light Button
      </CbButton>
    </div>
    <div class="mt-8">
      <CbCheckbox v-model="isChecked" />
    </div>
    <div class="mt-8 w-64">
      <CbExpansionPanel v-model="isExpanded">
        <template #title>
          Vegetables
        </template>
        <template #content>
          <div>Lettuce</div>
          <div>Tomato</div>
          <div>Onions</div>
          <div>Picles</div>
        </template>
      </CbExpansionPanel>
    </div>
  </div>
</template>
