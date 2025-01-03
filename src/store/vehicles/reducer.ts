import { combineReducers } from 'redux';

import VehiclesActionTypes from './actionTypes';
import type { State, Action } from './types';

const initState = {
  count: 0,
  items: [],
  loader: false,
  vehicle: null,
  currentPage: 1
};

const vehiclesCountReducer = (state: State['count'] = initState.count, action: Action) => {
  switch (action.type) {
    case VehiclesActionTypes.SET_VEHICLES_COUNT:
      return action.payload;
    default:
      return state;
  }
};

const vehiclesItemsReducer = (state: State['items'] = initState.items, action: Action) => {
  switch (action.type) {
    case VehiclesActionTypes.SET_VEHICLES_ITEMS:
      return action.payload;
    default:
      return state;
  }
};

const vehicleReducer = (state: State['vehicle'] = initState.vehicle, action: Action) => {
  switch (action.type) {
    case VehiclesActionTypes.SET_VEHICLE:
      return action.payload;
    default:
      return state;
  }
};

const vehiclesLoaderReducer = (state: State['loader'] = initState.loader, action: Action) => {
  switch (action.type) {
    case VehiclesActionTypes.SET_VEHICLES_LOADER:
      return action.payload;
    default:
      return state;
  }
};

const currentPageReducer = (state: State['currentPage'] = initState.currentPage, action: Action) => {
  switch (action.type) {
    case VehiclesActionTypes.SET_CURRENT_PAGE:
      return action.payload;
    default:
      return state;
  }
};

const vehiclesReducer = combineReducers({
  count: vehiclesCountReducer,
  items: vehiclesItemsReducer,
  loader: vehiclesLoaderReducer,
  vehicle: vehicleReducer,
  currentPage: currentPageReducer
});

export default vehiclesReducer;
