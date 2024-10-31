import PeopleActionTypes from './actionTypes';
import type { State } from './types';

export const setPeopleCountAction = (count: State['count']) => ({
  type: PeopleActionTypes.SET_PEOPLE_COUNT,
  payload: count,
});
export const setPeopleItemsAction = (items: State['items']) => ({
  type: PeopleActionTypes.SET_PEOPLE_ITEMS,
  payload: items,
});

export const setPersonAction = (item: State['person']) => ({
  type: PeopleActionTypes.SET_PERSON,
  payload: item,
});

export const setPeopleLoaderAction = (loader: boolean) => ({
  type: PeopleActionTypes.SET_PEOPLE_LOADER,
  payload: loader,
});

export const setCurrentPageAction = (page: State['currentPage']) => ({
  type: PeopleActionTypes.SET_CURRENT_PAGE,
  payload: page,
});

export const fetchPeopleAction = (page: number | undefined) => ({
  type: PeopleActionTypes.FETCH_PEOPLE,
  payload: page,
});

export const fetchPeopleIdAction = (id: string) => ({
  type: PeopleActionTypes.FETCH_PEOPLE_ID,
  payload: id,
});
