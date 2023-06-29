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
    class="border-b-4 transition-all"
    :class="[locale.code === localeProperties.code ? 'border-primary-500' : 'border-transparent']"
    @click="setLocale(locale.code)"
  >
    {{ locale.name }}
  </button>
</template>
