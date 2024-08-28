import type { State } from './types';

export const filmsCountSelector = (state: { films: State }) =>
  state.films.count;

export const filmsItemsSelector = (state: { films: State }) =>
  state.films?.items;

export const filmsLoaderSelector = (state: { films: State }) =>
  state.films?.loader;

export const filmSelector = (state: { films: State }) =>
  state.films?.film;

export const currentPageSelector = (state: { films: State }) =>
  state.films?.currentPage;
