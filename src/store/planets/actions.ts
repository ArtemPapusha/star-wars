import PlanetsActionTypes from "./actionTypes"
import type { State } from "./types"


export const setPlanetsCount = (count: State['count']) => ({
  type: PlanetsActionTypes.SET_PLANETS_COUNT,
  payload: count
})
export const setPlanetsItems = (items: State['items']) => ({
  type: PlanetsActionTypes.SET_PLANETS_ITEMS,
  payload: items
})

export const setPlanet = (item: State['planet']) => ({
  type: PlanetsActionTypes.SET_PLANET,
  payload: item
})

export const setPlanetsLoader = (loader: State['loader']) => ({
  type: PlanetsActionTypes.SET_PLANETS_LOADER,
  payload: loader
})

export const setCurrentPageAction = (page: number | undefined) => ({
  type: PlanetsActionTypes.SET_CURRENT_PAGE,
  payload: page
})
