import type { FilmType } from '@pages/FilmList/types';

import type {
  setFilmAction,
  setFilmsCountAction,
  setFilmsItemsAction,
  setFilmsLoaderAction,
  setCurrentPageAction
} from './actions';

export interface State {
  count: number | undefined;
  items: FilmType[];
  loader: boolean;
  film: Omit<FilmType, 'url' | 'created' | 'edited'>;
  currentPage: number | undefined
}

export type Action =
  | ReturnType<typeof setFilmAction>
  | ReturnType<typeof setFilmsCountAction>
  | ReturnType<typeof setFilmsItemsAction>
  | ReturnType<typeof setFilmsLoaderAction>
  | ReturnType<typeof setCurrentPageAction>;
