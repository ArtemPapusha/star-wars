import type { PlanetType } from '@pages/PlanetList/types';

import type {
  setPlanetsCount,
  setPlanetsItems,
  setPlanetsLoader,
  setPlanet,
  setCurrentPageAction
} from './actions';

export interface State {
  count: number | undefined;
  items: PlanetType[];
  loader: boolean;
  planet: Omit<PlanetType, 'url' | 'created' | 'edited'>;
  currentPage: number | undefined
}

export type Action =
  | ReturnType<typeof setPlanetsCount>
  | ReturnType<typeof setPlanetsItems>
  | ReturnType<typeof setPlanetsLoader>
  | ReturnType<typeof setPlanet>
  | ReturnType<typeof setCurrentPageAction>;
