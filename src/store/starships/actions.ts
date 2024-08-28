import StarshipsActionTypes from './actionTypes';
import type { State } from './types';

export const setStarshipsCountAction = (count: State['count']) => ({
  type: StarshipsActionTypes.SET_STARSHIPS_COUNT,
  payload: count,
});
export const setStarshipsItemsAction = (items: State['items']) => ({
  type: StarshipsActionTypes.SET_STARSHIPS_ITEMS,
  payload: items,
});

export const setStarshipAction = (item: State['starship']) => ({
  type: StarshipsActionTypes.SET_STARSHIP,
  payload: item,
});

export const setStarshipsLoaderAction = (loader: State['loader']) => ({
  type: StarshipsActionTypes.SET_STARSHIPS_LOADER,
  payload: loader,
});

export const setCurrentPageAction = (page: State['currentPage']) => ({
  type: StarshipsActionTypes.SET_CURRENT_PAGE,
  payload: page,
});
