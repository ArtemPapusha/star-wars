import { combineReducers } from 'redux';

import PlanetsActionTypes from './actionTypes';
import type { State, Action } from './types';

const initState = {
  count: 0,
  items: [],
  loader: false,
  planet: {
    name: '',
    rotation_period: '',
    orbital_period: '',
    diameter: '',
    climate: '',
    gravity: '',
    terrain: '',
    surface_water: '',
    population: '',
    residents: [],
    films: [],
  },
  currentPage: 1
};

const planetsCountReducer = (state: State['count'] = initState.count, action: Action) => {
  switch (action.type) {
    case PlanetsActionTypes.SET_PLANETS_COUNT:
      return action.payload;
    default:
      return state;
  }
};

const planetsItemsReducer = (state: State['items'] = initState.items, action: Action) => {
  switch (action.type) {
    case PlanetsActionTypes.SET_PLANETS_ITEMS:
      return action.payload;
    default:
      return state;
  }
};

const planetReducer = (state: State['planet'] = initState.planet, action: Action) => {
  switch (action.type) {
    case PlanetsActionTypes.SET_PLANET:
      return action.payload;
    default:
      return state;
  }
};

const planetsLoaderReducer = (state: State['loader'] = initState.loader, action: Action) => {
  switch (action.type) {
    case PlanetsActionTypes.SET_PLANETS_LOADER:
      return action.payload;
    default:
      return state;
  }
};

const currentPageReducer = (state: State['currentPage'] = initState.currentPage, action: Action) => {
  switch (action.type) {
    case PlanetsActionTypes.SET_CURRENT_PAGE:
      return action.payload;
    default:
      return state;
  }
};

const planetsReducer = combineReducers({
  count: planetsCountReducer,
  items: planetsItemsReducer,
  loader: planetsLoaderReducer,
  planet: planetReducer,
  currentPage: currentPageReducer
});

export default planetsReducer;
