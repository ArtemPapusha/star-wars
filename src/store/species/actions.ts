import SpeciesActionTypes from "./actionTypes"
import type { State } from "./types"


export const setSpeciesCountAction = (count: State['count']) => ({
  type: SpeciesActionTypes.SET_SPECIES_COUNT,
  payload: count
})
export const setSpeciesItemsAction = (items: State['items']) => ({
  type: SpeciesActionTypes.SET_SPECIES_ITEMS,
  payload: items
})

export const setSpecieAction = (item: State['specie']) => ({
  type: SpeciesActionTypes.SET_SPECIE,
  payload: item
})

export const setSpeciesLoaderAction = (loader: State['loader']) => ({
  type: SpeciesActionTypes.SET_SPECIES_LOADER,
  payload: loader
})

export const setCurrentPageAction = (page: State['currentPage']) => ({
  type: SpeciesActionTypes.SET_CURRENT_PAGE,
  payload: page
})