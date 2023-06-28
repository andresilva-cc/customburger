import { Ingredient } from '~/types/Ingredient'

export type Category = {
  name: string,
  isExpanded: boolean,
  ingredients: Array<Ingredient>
}
