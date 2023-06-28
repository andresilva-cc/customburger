<script setup lang="ts">
import { ref, reactive, computed, onBeforeMount } from 'vue'
import { Ingredient } from '~~/types/Ingredient'

const router = useRouter()
const { categoriesRepository } = useRepository()

const isAnimationInProgress = ref(false)
const animationDirection = ref('')
const hasFinished = ref(false)

const categories = reactive(categoriesRepository.getCategories())

const ingredients = computed(() => {
  return categories.flatMap((category) => {
    return category.ingredients
  })
})

onBeforeMount(() => {
  updateDistances()
})

function isIngredientChecked (name: string): boolean {
  const ingredient = ingredients.value.find((ingredient) => {
    return ingredient.iconName === name
  })

  return ingredient?.isChecked || false
}

function updatePreviousDistances (ingredient: Ingredient): void {
  if (ingredient.previousDistance) {
    ingredient.previousDistance = ingredient.currentDistance
    return
  }

  ingredient.previousDistance = ingredient.distances[0]
}

function updateDistances (log = false): void {
  ingredients.value.forEach((ingredient) => {
    updatePreviousDistances(ingredient)

    // console.log(ingredient.iconName, ingredient.isChecked)
    if (ingredient.distances.length === 1) {
      if (log) { console.log('Length 1', ingredient.iconName, ingredient.distances[0].distance) }
      ingredient.currentDistance = ingredient.distances[0]
      return
    }

    const distances = ingredient.distances.find((distances) => {
      return isIngredientChecked(distances.when || '')
    })

    if (distances) {
      if (log) { console.log('When', distances.when, ingredient.iconName, distances.distance) }
      ingredient.currentDistance = distances
      return
    }

    if (log) { console.log('Default', ingredient.iconName, ingredient.distances[0].distance) }
    ingredient.currentDistance = ingredient.distances[0]
  })
}

function onUpdateExpanded (newValue: boolean, name: string) {
  categories.forEach((category) => {
    if (category.name === name) {
      category.isExpanded = newValue
      return
    }

    category.isExpanded = false
  })
}

function onUpdateOption (newValue: boolean) {
  updateDistances(true)
  isAnimationInProgress.value = true
  animationDirection.value = newValue ? 'entering' : 'exiting'

  const ms = newValue ? 800 : 600

  setTimeout(() => {
    isAnimationInProgress.value = false
  }, ms)
}

function finish () {
  hasFinished.value = true

  setTimeout(() => {
    router.push('/done')
  }, 2000)
}
</script>

<template>
  <main class="flex flex-col h-full md:px-16 md:pb-16 overflow-hidden">
    <h1 class="py-4 md:py-8 font-heading text-2xl text-center uppercase">
      {{ $t('build.title') }}
    </h1>
    <div class="flex-1 flex flex-col md:flex-row justify-between md:justify-center items-center">
      <div class="flex-1 w-full mb-8 md:mb-0 md:translate-y-16">
        <BurgerPreview
          :ingredients="ingredients"
          :is-animation-in-progress="isAnimationInProgress"
          :animation-direction="animationDirection"
          :has-finished="hasFinished"
        />
      </div>

      <aside class="w-full bottom-0 md:w-[300px] z-10">
        <div class="flex flex-col gap-3 md:gap-6 py-3 md:py-6 px-4 bg-light-50 resize-y rounded-t-lg md:rounded-lg">
          <CbExpansionPanel
            v-for="category in categories"
            :key="category.name"
            :model-value="category.isExpanded"
            @update:model-value="onUpdateExpanded($event, category.name)"
          >
            <template #title>
              {{ category.name }}
            </template>

            <template #content>
              <CbOption
                v-for="(ingredient, index) in category.ingredients"
                :key="ingredient.name"
                v-model="ingredient.isChecked"
                :icon-name="ingredient.iconName"
                :bordered="index < category.ingredients.length - 1"
                @update:model-value="onUpdateOption($event)"
              >
                {{ ingredient.name }}
              </CbOption>
            </template>
          </CbExpansionPanel>
        </div>

        <CbButton class="rounded-none md:rounded-lg md:mt-6" :disabled="hasFinished" @click="finish">
          {{ $t('build.doneButton') }}
        </CbButton>
      </aside>
    </div>
  </main>
</template>
