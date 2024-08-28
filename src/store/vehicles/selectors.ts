import type { State } from './types';

export const vehiclesCountSelector = (state: { vehicles: State }) =>
  state.vehicles.count;

export const vehiclesItemsSelector = (state: { vehicles: State }) =>
  state.vehicles?.items;

export const vehiclesLoaderSelector = (state: { vehicles: State }) =>
  state.vehicles?.loader;

export const vehicleSelector = (state: { vehicles: State }) =>
  state.vehicles?.vehicle;

export const currentPageSelector = (state: { vehicles: State }) =>
  state.vehicles?.currentPage;
