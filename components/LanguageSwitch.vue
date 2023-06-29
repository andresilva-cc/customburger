<script setup lang="ts">
import { computed } from 'vue'
import { LocaleObject } from '@nuxtjs/i18n/dist/runtime/composables'

const { localeProperties, locales, setLocale } = useI18n()

const availableLocales = computed((): LocaleObject[] => {
  return locales.value as LocaleObject[]
})
</script>

<template>
  <button
    v-for="locale in availableLocales"
    :key="locale.code"
    class="border-b-4 rounded-b-[4px] transition-all hover:transition-none"
    :class="[
      locale.code === localeProperties.code ?
        'border-primary-500 text-primary-500 hover:text-primary-600 active:text-primary-700 hover:border-primary-600 border:text-primary-700'
        : 'border-transparent hover:opacity-80 active:opacity-60'
    ]"
    @click="setLocale(locale.code)"
  >
    {{ locale.name }}
  </button>
</template>
