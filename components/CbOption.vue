<script setup lang="ts">
interface Props {
  modelValue: boolean,
  iconName: string,
  bordered?: boolean,
  disabled?: boolean
}

interface Emits {
  (e: 'update:modelValue', value: boolean): void
}

const props = withDefaults(defineProps<Props>(), {
  bordered: false,
  disabled: false
})

const emit = defineEmits<Emits>()

const isChecked = computed({
  get () {
    return props.modelValue
  },
  set (value) {
    emit('update:modelValue', value)
  }
})

function toggleIsChecked () {
  if (props.disabled) { return }

  isChecked.value = !isChecked.value
}

const IconComponent = resolveComponent(props.iconName)
</script>

<template>
  <div
    class="flex items-center h-12 cursor-pointer"
    :class="[
      { 'border-b-[1px] border-b-gray-900 border-opacity-20': props.bordered },
      props.disabled ? 'cursor-default' : 'cursor-pointer'
    ]"
    @click="toggleIsChecked"
  >
    <div class="flex-1">
      <slot />
    </div>

    <component :is="IconComponent" class="w-8 h-8 mr-4" />

    <CbCheckbox
      v-model="isChecked"
      :disabled="props.disabled"
    />
  </div>
</template>
