<template>
  <NuxtPage />
</template>

<style lang="postcss">
.page-enter-active,
.page-leave-active {
  @apply transition-opacity duration-300 ease-linear;
}
.page-enter-from,
.page-leave-to {
  @apply opacity-0;
}
</style>
