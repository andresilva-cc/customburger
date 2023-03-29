<script setup lang="ts">
import { ref } from 'vue'

const checked = ref(false)
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
    <div class="flex gap-4 mt-8">
      <CbCheckbox v-model="checked" />
    </div>
  </div>
</template>
