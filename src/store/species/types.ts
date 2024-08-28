import type { SpecieType } from '@pages/SpecieList/types';

import type {
  setSpecieAction,
  setSpeciesCountAction,
  setSpeciesItemsAction,
  setSpeciesLoaderAction,
  setCurrentPageAction
} from './actions';

export interface State {
  count: number | undefined;
  items: SpecieType[];
  loader: boolean;
  specie: Omit<SpecieType, 'url' | 'created' | 'edited'>;
  currentPage: number | undefined
}

export type Action =
  | ReturnType<typeof setSpecieAction>
  | ReturnType<typeof setSpeciesCountAction>
  | ReturnType<typeof setSpeciesItemsAction>
  | ReturnType<typeof setSpeciesLoaderAction>
  | ReturnType<typeof setCurrentPageAction>;
