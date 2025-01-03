import { combineReducers } from 'redux';

import StarshipsActionTypes from './actionTypes';
import type { State, Action } from './types';

const initState = {
  count: 0,
  items: [],
  loader: false,
  starship: null,
  currentPage: 1,
};

const starshipsCountReducer = (
  state: State['count'] = initState.count,
  action: Action,
) => {
  switch (action.type) {
    case StarshipsActionTypes.SET_STARSHIPS_COUNT:
      return action.payload;
    default:
      return state;
  }
};

const starshipsItemsReducer = (
  state: State['items'] = initState.items,
  action: Action,
) => {
  switch (action.type) {
    case StarshipsActionTypes.SET_STARSHIPS_ITEMS:
      return action.payload;
    default:
      return state;
  }
};

const starshipReducer = (
  state: State['starship'] = initState.starship,
  action: Action,
) => {
  switch (action.type) {
    case StarshipsActionTypes.SET_STARSHIP:
      return action.payload;
    default:
      return state;
  }
};

const starshipsLoaderReducer = (
  state: State['loader'] = initState.loader,
  action: Action,
) => {
  switch (action.type) {
    case StarshipsActionTypes.SET_STARSHIPS_LOADER:
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
    case StarshipsActionTypes.SET_CURRENT_PAGE:
      return action.payload;
    default:
      return state;
  }
};

const starshipsReducer = combineReducers({
  count: starshipsCountReducer,
  items: starshipsItemsReducer,
  loader: starshipsLoaderReducer,
  starship: starshipReducer,
  currentPage: currentPageReducer,
});

export default starshipsReducer;
