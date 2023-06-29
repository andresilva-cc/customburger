export interface Distances {
  when: string
  distance: number
  distanceWhenAnimating: number
}

export interface Ingredient {
  name: string
  iconName: string
  hasDifferentPreviewIcon?: boolean
  isChecked: boolean
  zIndex: number
  currentDistance?: Distances
  previousDistance?: Distances
  distances: Array<Distances>
}
