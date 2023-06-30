<script setup lang="ts">
const isChecked = ref(false)
const isExpanded = ref(false)
const options = reactive([
  { name: 'Lettuce', isChecked: false },
  { name: 'Onion', isChecked: false },
  { name: 'Pickle', isChecked: false },
  { name: 'Tomato', isChecked: false }
])
</script>

<template>
  <div class="flex flex-col m-8">
    <h1 class="font-heading uppercase text-2xl mb-8">
      Components
    </h1>
    <div class="grid grid-cols-2 grid-rows-3 gap-4 w-[600px]">
      <CbButton color="primary" class="col-start-1 row-start-1">
        Primary Button
      </CbButton>
      <CbButton color="secondary" class="col-start-1 row-start-2">
        Secondary Button
      </CbButton>
      <CbButton color="light" class="col-start-1 row-start-3">
        Light Button
      </CbButton>
      <CbButton color="primary" disabled class="col-start-2 row-start-1">
        Disabled Primary Button
      </CbButton>
      <CbButton color="secondary" disabled class="col-start-2 row-start-2">
        Disabled Secondary Button
      </CbButton>
      <CbButton color="light" disabled class="col-start-2 row-start-3">
        Disabled Light Button
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
          <CbOption
            v-for="(option, index) in options"
            :key="index"
            v-model="option.isChecked"
            :icon-name="`${option.name}Ingredient`"
            :bordered="index < options.length - 1"
          >
            {{ option.name }}
          </CbOption>
        </template>
      </CbExpansionPanel>
    </div>
  </div>
</template>
