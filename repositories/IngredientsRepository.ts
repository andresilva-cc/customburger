import type { Composer } from 'vue-i18n'
import { Ingredient } from '~~/types/Ingredient'

interface IngredientByCategory {
  [category: string]: Array<Ingredient>
}

export const IngredientsRepository = (t: Composer['t']) => ({
  getAll (): IngredientByCategory {
    return {
      sauces: [
        {
          name: t('build.ingredients.mayo'),
          iconName: 'MayoIngredient',
          isChecked: false,
          zIndex: 1,
          currentDistance: undefined,
          previousDistance: undefined,
          distances: [
            { when: 'default', distance: -28, distanceWhenAnimating: -24 },
            { when: 'GreenMayoIngredient', distance: -16, distanceWhenAnimating: -24 }
          ]
        },
        {
          name: t('build.ingredients.greenMayo'),
          iconName: 'GreenMayoIngredient',
          isChecked: false,
          zIndex: 2,
          currentDistance: undefined,
          previousDistance: undefined,
          distances: [
            { when: 'default', distance: -26, distanceWhenAnimating: -64 }
          ]
        }
      ],
      meat: [
        {
          name: t('build.ingredients.burger'),
          iconName: 'BurgerIngredient',
          isChecked: false,
          zIndex: 2,
          currentDistance: undefined,
          previousDistance: undefined,
          distances: [
            { when: 'default', distance: -60, distanceWhenAnimating: -112 }
          ]
        },
        {
          name: t('build.ingredients.chicken'),
          iconName: 'ChickenIngredient',
          isChecked: false,
          zIndex: 2,
          currentDistance: undefined,
          previousDistance: undefined,
          distances: [
            { when: 'default', distance: -60, distanceWhenAnimating: -148 },
            { when: 'BurgerIngredient', distance: -80, distanceWhenAnimating: -148 }
          ]
        },
        {
          name: t('build.ingredients.bacon'),
          iconName: 'BaconIngredient',
          hasDifferentPreviewIcon: true,
          isChecked: false,
          zIndex: 4,
          currentDistance: undefined,
          previousDistance: undefined,
          distances: [
            { when: 'default', distance: -48, distanceWhenAnimating: -96 },
            { when: 'BurgerIngredient', distance: -92, distanceWhenAnimating: -174 },
            { when: 'ChickenIngredient', distance: -92, distanceWhenAnimating: -174 }
          ]
        }
      ],
      cheese: [
        {
          name: t('build.ingredients.cheese'),
          iconName: 'CheeseIngredient',
          isChecked: false,
          zIndex: 3,
          currentDistance: undefined,
          previousDistance: undefined,
          distances: [
            { when: 'default', distance: -112, distanceWhenAnimating: -164 },
            { when: 'BurgerIngredient', distance: -148, distanceWhenAnimating: -248 },
            { when: 'ChickenIngredient', distance: -148, distanceWhenAnimating: -248 }
          ]
        }
      ],
      vegetables: [
        {
          name: t('build.ingredients.lettuce'),
          iconName: 'LettuceIngredient',
          hasDifferentPreviewIcon: true,
          isChecked: false,
          zIndex: 5,
          currentDistance: undefined,
          previousDistance: undefined,
          distances: [
            { when: 'default', distance: -64, distanceWhenAnimating: -196 },
            { when: 'BurgerIngredient', distance: -92, distanceWhenAnimating: -248 },
            { when: 'ChickenIngredient', distance: -92, distanceWhenAnimating: -248 }
          ]
        },
        {
          name: t('build.ingredients.onion'),
          iconName: 'OnionIngredient',
          hasDifferentPreviewIcon: true,
          isChecked: false,
          zIndex: 5,
          currentDistance: undefined,
          previousDistance: undefined,
          distances: [
            { when: 'default', distance: -96, distanceWhenAnimating: -196 },
            { when: 'BurgerIngredient', distance: -128, distanceWhenAnimating: -284 },
            { when: 'ChickenIngredient', distance: -128, distanceWhenAnimating: -284 }
          ]
        },
        {
          name: t('build.ingredients.pickle'),
          iconName: 'PickleIngredient',
          hasDifferentPreviewIcon: true,
          isChecked: false,
          zIndex: 5,
          currentDistance: undefined,
          previousDistance: undefined,
          distances: [
            { when: 'default', distance: -48, distanceWhenAnimating: -210 },
            { when: 'BurgerIngredient', distance: -64, distanceWhenAnimating: -300 },
            { when: 'ChickenIngredient', distance: -64, distanceWhenAnimating: -300 }
          ]
        },
        {
          name: t('build.ingredients.tomato'),
          iconName: 'TomatoIngredient',
          hasDifferentPreviewIcon: true,
          isChecked: false,
          zIndex: 4,
          currentDistance: undefined,
          previousDistance: undefined,
          distances: [
            { when: 'default', distance: -64, distanceWhenAnimating: -248 },
            { when: 'BurgerIngredient', distance: -96, distanceWhenAnimating: -324 },
            { when: 'ChickenIngredient', distance: -96, distanceWhenAnimating: -324 }
          ]
        }
      ]
    }
  },

  getByCategory (category: keyof ReturnType<typeof this.getAll>) {
    return this.getAll()[category]
  }
})
