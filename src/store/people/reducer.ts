import { combineReducers } from 'redux';

import PeopleActionTypes from './actionTypes';
import type { State, Action } from './types';

const initState = {
  count: 0,
  items: [],
  loader: false,
  person: {
    birth_year: '',
    eye_color: '',
    films: [],
    gender: '',
    hair_color: '',
    height: '',
    homeworld: '',
    mass: '',
    name: '',
    skin_color: '',
    species: [],
    starships: [],
    vehicles: [],
  },
  currentPage: 1
};

const peopleCountReducer = (state: State['count'] = initState.count, action: Action) => {
  switch (action.type) {
    case PeopleActionTypes.SET_PEOPLE_COUNT:
      return action.payload;
    default:
      return state;
  }
};

const peopleItemsReducer = (state: State['items'] = initState.items, action: Action) => {
  switch (action.type) {
    case PeopleActionTypes.SET_PEOPLE_ITEMS:
      return action.payload;
    default:
      return state;
  }
};

const personReducer = (state: State['person'] = initState.person, action: Action) => {
  switch (action.type) {
    case PeopleActionTypes.SET_PERSON:
      return action.payload;
    default:
      return state;
  }
};

const peopleLoaderReducer = (state: State['loader'] = initState.loader, action: Action) => {
  switch (action.type) {
    case PeopleActionTypes.SET_PEOPLE_LOADER:
      return action.payload;
    default:
      return state;
  }
};

const currentPageReducer = (state: State['currentPage'] = initState.currentPage, action: Action) => {
  switch (action.type) {
    case PeopleActionTypes.SET_CURRENT_PAGE:
      return action.payload;
    default:
      return state;
  }
};

const peopleReducer = combineReducers({
  count: peopleCountReducer,
  items: peopleItemsReducer,
  loader: peopleLoaderReducer,
  person: personReducer,
  currentPage: currentPageReducer
});

export default peopleReducer;
