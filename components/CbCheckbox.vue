<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(
  defineProps<{
    modelValue: boolean
  }>(),
  {}
)

const emit = defineEmits<{(e: 'update:modelValue', value: boolean): void}>()

const isChecked = computed({
  get () {
    return props.modelValue
  },
  set (value) {
    emit('update:modelValue', value)
  }
})
</script>

<template>
  <div class="relative w-5 h-5">
    <input v-model="isChecked" type="checkbox" class="absolute w-5 h-5 z-[1] opacity-0 peer">
    <div
      class="flex justify-center items-center absolute w-5 h-5 rounded transition-all ease-out"
      :class="[
        isChecked ? 'border-[10px] border-primary-500 peer-hover:border-primary-600 peer-active:border-primary-700'
        : 'border-2 border-gray-900 peer-hover:bg-light-100 peer-active:bg-light-200'
      ]"
    >
      <CheckIcon
        class="absolute text-white transition-all ease-in delay-150"
        :class="[ isChecked? 'w-[15px] h-[15px] opacity-100' : 'w-0 h-0 opacity-0' ]"
      />
    </div>
  </div>
</template>
