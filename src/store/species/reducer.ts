import { combineReducers } from 'redux';

import SpeciesActionTypes from './actionTypes';
import type { State, Action } from './types';

const initState = {
  count: 0,
  items: [],
  loader: false,
  specie: null,
  currentPage: 1,
};

const speciesCountReducer = (
  state: State['count'] = initState.count,
  action: Action,
) => {
  switch (action.type) {
    case SpeciesActionTypes.SET_SPECIES_COUNT:
      return action.payload;
    default:
      return state;
  }
};

const speciesItemsReducer = (
  state: State['items'] = initState.items,
  action: Action,
) => {
  switch (action.type) {
    case SpeciesActionTypes.SET_SPECIES_ITEMS:
      return action.payload;
    default:
      return state;
  }
};

const specieReducer = (
  state: State['specie'] = initState.specie,
  action: Action,
) => {
  switch (action.type) {
    case SpeciesActionTypes.SET_SPECIE:
      return action.payload;
    default:
      return state;
  }
};

const speciesLoaderReducer = (
  state: State['loader'] = initState.loader,
  action: Action,
) => {
  switch (action.type) {
    case SpeciesActionTypes.SET_SPECIES_LOADER:
      return action.payload;
    default:
      return state;
  }
};

const currentPageReducer = (
  state: State['currentPage'] = initState.currentPage,
  action: Action,
) => {
  switch (action.type) {
    case SpeciesActionTypes.SET_CURRENT_PAGE:
      return action.payload;
    default:
      return state;
  }
};

const speciesReducer = combineReducers({
  count: speciesCountReducer,
  items: speciesItemsReducer,
  loader: speciesLoaderReducer,
  specie: specieReducer,
  currentPage: currentPageReducer,
});

export default speciesReducer;
