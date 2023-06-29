import type { Ingredient } from '~/types/Ingredient'

export interface Category {
  name: string,
  isExpanded: boolean,
  ingredients: Array<Ingredient>
}
