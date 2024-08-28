import type { State } from './types';

export const starshipsCountSelector = (state: { starships: State }) =>
  state.starships.count;

export const starshipsItemsSelector = (state: { starships: State }) =>
  state.starships?.items;

export const starshipsLoaderSelector = (state: { starships: State }) =>
  state.starships?.loader;

export const starshipSelector = (state: { starships: State }) =>
  state.starships?.starship;

export const currentPageSelector = (state: { starships: State }) =>
  state.starships?.currentPage;
