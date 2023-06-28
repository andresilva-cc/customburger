import { Composer } from 'vue-i18n'

import type { IngredientsRepository } from '~/repositories/IngredientsRepository'
import type { Category } from '~/types/Category'

export const CategoriesRepository = (
  t: Composer['t'],
  ingredientsRepository: ReturnType<typeof IngredientsRepository>
) => ({
  getCategories (): Array<Category> {
    return [
      {
        name: t('build.categories.sauces'),
        isExpanded: true,
        ingredients: ingredientsRepository.getByCategory('sauces')
      },
      {
        name: t('build.categories.meat'),
        isExpanded: false,
        ingredients: ingredientsRepository.getByCategory('meat')
      },
      {
        name: t('build.categories.cheese'),
        isExpanded: false,
        ingredients: ingredientsRepository.getByCategory('cheese')
      },
      {
        name: t('build.categories.vegetables'),
        isExpanded: false,
        ingredients: ingredientsRepository.getByCategory('vegetables')
      }
    ]
  }
})
