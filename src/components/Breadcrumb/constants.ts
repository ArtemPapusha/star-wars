import { LAYOUT, LAYOUT_ID, ROUTE_ID, ROUTES } from '@constants/routes';

export const TITLE = {
  [LAYOUT[LAYOUT_ID.USER].ID]: 'breadcrumbs.item.home',
  [ROUTES[ROUTE_ID.HOME].ID]: 'breadcrumbs.item.home',
  [ROUTES[ROUTE_ID.PEOPLE].ID]: 'breadcrumbs.item.people',
  [ROUTES[ROUTE_ID.PLANETS].ID]: 'breadcrumbs.item.planets',
  [ROUTES[ROUTE_ID.FILMS].ID]: 'breadcrumbs.item.films',
  [ROUTES[ROUTE_ID.SPECIES].ID]: 'breadcrumbs.item.species',
  [ROUTES[ROUTE_ID.STARSHIPS].ID]: 'breadcrumbs.item.starships',
  [ROUTES[ROUTE_ID.VEHICLES].ID]: 'breadcrumbs.item.vehicles',
};
