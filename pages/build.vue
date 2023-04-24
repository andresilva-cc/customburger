<script setup lang="ts">
import { ref, reactive, computed } from 'vue'

type Categories = Array<{
  name: string,
  isExpanded: boolean,
  options: Array<{
    name: string,
    iconName: string,
    differentPreviewIcon?: boolean
    isChecked: boolean,
    zIndex: string,
    distance: number,
  }>
}>

const router = useRouter()

const isAnimationInProgress = ref(false)
const currentAnimatingOption = ref('')
const isFinished = ref(false)

const categories: Categories = reactive([
  {
    name: 'Sauces',
    isExpanded: true,
    options: [
      { name: 'Mayo', iconName: 'MayoIngredient', isChecked: false, zIndex: 'z-[1]', distance: 38 },
      { name: 'Green Mayo', iconName: 'GreenMayoIngredient', isChecked: false, zIndex: 'z-[1]', distance: 32 }
    ]
  },
  {
    name: 'Meat',
    isExpanded: false,
    options: [
      { name: 'Burger', iconName: 'BurgerIngredient', isChecked: false, zIndex: 'z-[2]', distance: 48 },
      { name: 'Chicken', iconName: 'ChickenIngredient', isChecked: false, zIndex: 'z-[2]', distance: 48 },
      { name: 'Bacon', iconName: 'BaconIngredient', differentPreviewIcon: true, isChecked: false, zIndex: 'z-[4] mb-5', distance: 30 }
    ]
  },
  {
    name: 'Cheese',
    isExpanded: false,
    options: [
      { name: 'Cheese', iconName: 'CheeseIngredient', isChecked: false, zIndex: 'z-[3]', distance: 56 }
    ]
  },
  {
    name: 'Vegetables',
    isExpanded: false,
    options: [
      { name: 'Lettuce', iconName: 'LettuceIngredient', differentPreviewIcon: true, isChecked: false, zIndex: 'z-[5]', distance: 80 },
      { name: 'Onion', iconName: 'OnionIngredient', differentPreviewIcon: true, isChecked: false, zIndex: 'z-[5]', distance: 80 },
      { name: 'Pickle', iconName: 'PickleIngredient', differentPreviewIcon: true, isChecked: false, zIndex: 'z-[5]', distance: 96 },
      { name: 'Tomato', iconName: 'TomatoIngredient', differentPreviewIcon: true, isChecked: false, zIndex: 'z-[4]', distance: 64 }
    ]
  }
])

const ingredients = computed(() => {
  return categories.flatMap((category) => {
    return category.options
  })
})

function onUpdateExpanded (newValue: boolean, name: string) {
  categories.forEach((category) => {
    if (category.name === name) {
      category.isExpanded = newValue
      return
    }

    category.isExpanded = false
  })
}

function onUpdateOption (newValue: boolean, optionName: string) {
  isAnimationInProgress.value = true
  currentAnimatingOption.value = optionName

  const ms = newValue ? 800 : 600

  setTimeout(() => {
    isAnimationInProgress.value = false
    currentAnimatingOption.value = ''
  }, ms)
}

function finish () {
  isFinished.value = true

  setTimeout(() => {
    router.push('/done')
  }, 2000)
}
</script>

<template>
  <main class="flex flex-col h-full px-16 pb-16 overflow-hidden">
    <h1 class="py-8 font-heading text-2xl text-center uppercase">
      Make Your Burger
    </h1>
    <div class="flex-1 flex justify-center items-center">
      <div class="flex-1">
        <div class="relative w-[300px] h-[300px] mx-auto rounded-lg">
          <UpperBreadTransition>
            <UpperBreadIngredient
              v-if="isFinished"
              class="absolute w-full h-auto z-10 transition-all bottom-36 duration-[2s]"
            />
          </UpperBreadTransition>
          <IngredientTransition
            v-for="(ingredient, index) in ingredients"
            :key="index"
          >
            <component
              :is="`${ingredient.differentPreviewIcon ? 'Preview' : ''}${ingredient.iconName}`"
              v-if="ingredient.isChecked"
              class="absolute w-full h-auto transition-all"
              :class="ingredient.zIndex"
              :style="{ bottom: `${isAnimationInProgress && currentAnimatingOption !== ingredient.name ? index * 40 : ingredient.distance}px` }"
            />
          </IngredientTransition>
          <LowerBreadIngredient
            class="absolute w-full h-auto transition-all"
            :class="[isAnimationInProgress ? '-bottom-10' : 'bottom-0']"
          />
        </div>
      </div>

      <aside class="w-[300px] z-10">
        <div class="flex flex-col gap-6 py-6 px-4 bg-light-50 rounded-lg">
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
                v-for="(option, index) in category.options"
                :key="option.name"
                v-model="option.isChecked"
                :icon-name="option.iconName"
                :bordered="index < category.options.length - 1"
                @update:model-value="onUpdateOption($event, option.name)"
              >
                {{ option.name }}
              </CbOption>
            </template>
          </CbExpansionPanel>
        </div>
        <CbButton class="mt-6" @click="finish">
          That's The Way I Like It
        </CbButton>
      </aside>
    </div>
  </main>
</template>
