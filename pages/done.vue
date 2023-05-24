<template>
  <main class="flex flex-col items-center justify-center h-full bg-primary-500 text-white">
    <div class="px-4 w-full md:w-[300px]">
      <CheckIcon class="w-full mb-20 md:mb-0 h-40 md:h-[250px]" />
      <h1 class="mt-8 font-heading text-2xl uppercase text-center">
        {{ $t('done.title') }}
      </h1>
      <CbButton color="secondary" to="/build" class="mt-16">
        {{ $t('done.makeAnother') }}
      </CbButton>
      <CbButton color="light" to="/" class="mt-4">
        {{ $t('done.backToStart') }}
      </CbButton>
    </div>
  </main>
</template>
