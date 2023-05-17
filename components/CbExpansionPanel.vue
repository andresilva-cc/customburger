<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(
  defineProps<{
    modelValue: boolean
  }>(),
  {}
)

const emit = defineEmits<{(e: 'update:modelValue', value: boolean): void}>()

const isExpanded = computed({
  get () {
    return props.modelValue
  },
  set (value) {
    emit('update:modelValue', value)
  }
})

function toggleIsExpanded () {
  isExpanded.value = !isExpanded.value
}
</script>

<template>
  <div class="flex flex-col overflow-hidden">
    <button type="button" class="flex items-center justify-between" @click="toggleIsExpanded">
      <div class="uppercase font-heading text-xl">
        <slot name="title" />
      </div>
      <ChevronIcon class="w-4 h-4 transition duration-300 ease-in-out" :class="{ 'rotate-180': isExpanded }" />
    </button>
    <ExpansionTransition>
      <div v-show="isExpanded" class="duration-300 ease-in-out" :class="[isExpanded ? 'md:mt-4' : 'mt-0']">
        <slot name="content" />
      </div>
    </ExpansionTransition>
  </div>
</template>
