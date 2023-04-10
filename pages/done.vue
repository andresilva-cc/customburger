<template>
  <main class="flex flex-col items-center justify-center h-full bg-primary-500 text-white">
    <div class="w-[250px]">
      <CheckIcon class="w-full h-[250px]" />
      <h1 class="mt-8 font-heading text-2xl uppercase text-center">
        We Got This
      </h1>
      <CbButton color="secondary" to="/build" class="mt-16">
        Make Another
      </CbButton>
      <CbButton color="light" to="/" class="mt-4">
        Back To Start
      </CbButton>
    </div>
  </main>
</template>
