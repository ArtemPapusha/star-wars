import type { PersonType } from '@pages/PeopleList/types';

import type {
  setPeopleCountAction,
  setPeopleItemsAction,
  setPeopleLoaderAction,
  setPersonAction,
  setCurrentPageAction,
  fetchPeopleAction,
  fetchPeopleIdAction
} from './actions';

export interface State {
  count: number | undefined;
  items: PersonType[];
  loader: boolean;
  person: Omit<PersonType, 'url' | 'created' | 'edited'>;
  currentPage: number | undefined
}

export type Action =
  | ReturnType<typeof setPeopleCountAction>
  | ReturnType<typeof setPeopleItemsAction>
  | ReturnType<typeof setPeopleLoaderAction>
  | ReturnType<typeof setPersonAction>
  | ReturnType<typeof fetchPeopleAction>
  | ReturnType<typeof fetchPeopleIdAction>
  | ReturnType<typeof setCurrentPageAction>;
