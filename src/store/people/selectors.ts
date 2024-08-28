import { createSelector } from 'reselect';

import type { State } from './types';

export const peopleCountSelector = createSelector(
  (state: { people: State }) => state.people,
  (state) => state?.count
);

export const peopleItemsSelector = createSelector(
  (state: { people: State }) => state.people,
  (state) => state?.items
);

export const peopleLoaderSelector = createSelector(
  (state: { people: State }) => state.people,
  (state) => state?.loader
);

export const personSelector = createSelector(
  (state: { people: State }) => state.people,
  (state) => state?.person
);

export const currentPageSelector = createSelector(
  (state: { people: State }) => state.people,
  (state) => state?.currentPage
);
