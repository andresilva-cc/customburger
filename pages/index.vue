<script setup lang="ts">
import { computed } from 'vue'
import { LocaleObject } from '@nuxtjs/i18n/dist/runtime/composables'

const { localeProperties, locales, setLocale } = useI18n()

const availableLocales = computed((): LocaleObject[] => {
  return locales.value as LocaleObject[]
})
</script>

<template>
  <main class="flex justify-center items-center bg-light-50 h-full">
    <div class="px-4 w-full md:w-[300px]">
      <CbLogo class="w-full" />
      <CbButton to="/build" class="mt-16">
        {{ $t('home.startButton') }}
      </CbButton>
      <p class="absolute left-0 right-0 bottom-8 text-xs font-light text-center">
        {{ $t('home.developedBy') }} André Silva
      </p>
    </div>
    <div class="flex gap-4 absolute top-0 right-0 p-4">
      <button
        v-for="locale in availableLocales"
        :key="locale.code"
        class="border-b-4 transition-all"
        :class="[locale.code === localeProperties.code ? 'border-primary-500' : 'border-transparent']"
        @click="setLocale(locale.code)"
      >
        {{ locale.name }}
      </button>
    </div>
  </main>
</template>
