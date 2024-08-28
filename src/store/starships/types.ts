import type { StarshipType } from "@pages/StarshipList/types";

import type {
  setStarshipAction,
  setStarshipsCountAction,
  setStarshipsItemsAction,
  setStarshipsLoaderAction,
  setCurrentPageAction
} from './actions';

export interface State {
  count: number | undefined;
  items: StarshipType[];
  loader: boolean;
  starship: Omit<StarshipType, 'url' | 'created' | 'edited'>;
  currentPage: number | undefined
}

export type Action =
  | ReturnType<typeof setStarshipAction>
  | ReturnType<typeof setStarshipsCountAction>
  | ReturnType<typeof setStarshipsItemsAction>
  | ReturnType<typeof setStarshipsLoaderAction>
  | ReturnType<typeof setCurrentPageAction>;
