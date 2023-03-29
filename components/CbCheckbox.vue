<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(
  defineProps<{
    modelValue: boolean
  }>(),
  {}
)

const emit = defineEmits<{(e: 'update:modelValue', value: boolean): void}>()

const checked = computed({
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
    <input v-model="checked" type="checkbox" class="absolute w-5 h-5 z-[1] opacity-0">
    <div
      class="flex justify-center items-center absolute w-5 h-5 rounded transition-all ease-out"
      :class="[ checked ? 'border-[10px] border-primary-500': 'border-2 border-gray-900']"
    >
      <CheckIcon
        class="absolute text-white transition-all ease-in delay-150"
        :class="[ checked? 'w-[15px] h-[15px] opacity-100' : 'w-0 h-0 opacity-0' ]"
      />
    </div>
  </div>
</template>
