import FilmsActionTypes from "./actionTypes"
import type { State } from "./types"


export const setFilmsCountAction = (count: State['count']) => ({
  type: FilmsActionTypes.SET_FILMS_COUNT,
  payload: count
})
export const setFilmsItemsAction = (items: State['items']) => ({
  type: FilmsActionTypes.SET_FILMS_ITEMS,
  payload: items
})

export const setFilmAction = (item: State['film']) => ({
  type: FilmsActionTypes.SET_FILM,
  payload: item
})

export const setFilmsLoaderAction = (loader: State['loader']) => ({
  type: FilmsActionTypes.SET_FILMS_LOADER,
  payload: loader
})

export const setCurrentPageAction = (page: State['currentPage']) => ({
  type: FilmsActionTypes.SET_CURRENT_PAGE,
  payload: page
})