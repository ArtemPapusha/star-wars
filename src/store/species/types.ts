import type { SpecieType } from '@pages/SpecieList/types';
import type { ResultDataType } from '@services/types';

import type {
  setSpecieAction,
  setSpeciesCountAction,
  setSpeciesItemsAction,
  setSpeciesLoaderAction,
  setCurrentPageAction
} from './actions';

export interface State {
  count: number | undefined;
  items: ResultDataType[];
  loader: boolean;
  specie: SpecieType | null;
  currentPage: number | undefined
}

export type Action =
  | ReturnType<typeof setSpecieAction>
  | ReturnType<typeof setSpeciesCountAction>
  | ReturnType<typeof setSpeciesItemsAction>
  | ReturnType<typeof setSpeciesLoaderAction>
  | ReturnType<typeof setCurrentPageAction>;
