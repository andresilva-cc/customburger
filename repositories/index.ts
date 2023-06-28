import { Composer } from 'vue-i18n'
import { CategoriesRepository } from '~/repositories/CategoriesRepository'
import { IngredientsRepository } from '~/repositories/IngredientsRepository'

export default (t: Composer['t']) => ({
  categoriesRepository: CategoriesRepository(t, IngredientsRepository(t)),
  ingredientsRepository: IngredientsRepository(t)
})
