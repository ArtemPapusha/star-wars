import { combineReducers } from 'redux';

import FilmsActionTypes from './actionTypes';
import type { State, Action } from './types';

const initState = {
  count: 0,
  items: [],
  loader: false,
  film: null,
  currentPage: 1
};

const filmsCountReducer = (state: State['count'] = initState.count, action: Action) => {
  switch (action.type) {
    case FilmsActionTypes.SET_FILMS_COUNT:
      return action.payload;
    default:
      return state;
  }
};

const filmsItemsReducer = (state: State['items'] = initState.items, action: Action) => {
  switch (action.type) {
    case FilmsActionTypes.SET_FILMS_ITEMS:
      return action.payload;
    default:
      return state;
  }
};

const filmReducer = (state: State['film'] = initState.film, action: Action) => {
  switch (action.type) {
    case FilmsActionTypes.SET_FILM:
      return action.payload;
    default:
      return state;
  }
};

const filmsLoaderReducer = (state: State['loader'] = initState.loader, action: Action) => {
  switch (action.type) {
    case FilmsActionTypes.SET_FILMS_LOADER:
      return action.payload;
    default:
      return state;
  }
};

const currentPageReducer = (state: State['currentPage'] = initState.currentPage, action: Action) => {
  switch (action.type) {
    case FilmsActionTypes.SET_CURRENT_PAGE:
      return action.payload;
    default:
      return state;
  }
};

const filmsReducer = combineReducers({
  count: filmsCountReducer,
  items: filmsItemsReducer,
  loader: filmsLoaderReducer,
  film: filmReducer,
  currentPage: currentPageReducer
});

export default filmsReducer;
