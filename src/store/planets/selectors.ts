import type { State } from './types';

export const planetsCountSelector = (state: { planets: State }) =>
  state.planets.count;

export const planetsItemsSelector = (state: { planets: State }) =>
  state.planets?.items;

export const planetsLoaderSelector = (state: { planets: State }) =>
  state.planets?.loader;

export const planetSelector = (state: { planets: State }) =>
  state.planets?.planet;

export const currentPageSelector = (state: { planets: State }) =>
  state.planets?.currentPage;
