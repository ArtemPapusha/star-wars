import type { State } from './types';

export const speciesCountSelector = (state: { species: State }) =>
  state.species.count;

export const speciesItemsSelector = (state: { species: State }) =>
  state.species?.items;

export const speciesLoaderSelector = (state: { species: State }) =>
  state.species?.loader;

export const specieSelector = (state: { species: State }) =>
  state.species?.specie;

export const currentPageSelector = (state: { species: State }) =>
  state.species?.currentPage;
