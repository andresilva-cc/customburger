<template>
  <main class="flex justify-center items-center bg-light-50 h-full">
    <div class="flex gap-4 absolute top-0 right-0 p-4">
      <LanguageSwitch />
    </div>

    <div class="px-4 w-full md:w-[300px]">
      <CbLogo class="w-full" />

      <CbButton to="/build" class="mt-16">
        {{ $t('home.startButton') }}
      </CbButton>

      <div class="absolute left-0 right-0 bottom-8 text-xs font-light text-center">
        <p class="mb-2">
          {{ $t('home.developedBy') }}
          <CbAnchor
            href="https://andresilva.cc/"
            target="_blank"
          >
            André Silva
          </CbAnchor>
        </p>

        <CbAnchor
          href="https://www.vecteezy.com/vector-art/1828417-burger-ingredient-illustration-set"
          target="_blank"
        >
          {{ $t('home.illustrationAuthor') }}
        </CbAnchor>
      </div>
    </div>
  </main>
</template>
