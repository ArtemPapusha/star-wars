import VehiclesActionTypes from "./actionTypes"
import type { State } from "./types"

export const setVehiclesCountAction = (count: State['count']) => ({
  type: VehiclesActionTypes.SET_VEHICLES_COUNT,
  payload: count
})
export const setVehiclesItemsAction = (items: State['items']) => ({
  type: VehiclesActionTypes.SET_VEHICLES_ITEMS,
  payload: items
})

export const setVehicleAction = (item: State['vehicle']) => ({
  type: VehiclesActionTypes.SET_VEHICLE,
  payload: item
})

export const setVehiclesLoaderAction = (loader: State['loader']) => ({
  type: VehiclesActionTypes.SET_VEHICLES_LOADER,
  payload: loader
})

export const setCurrentPageAction = (page: State['currentPage']) => ({
  type: VehiclesActionTypes.SET_CURRENT_PAGE,
  payload: page
})