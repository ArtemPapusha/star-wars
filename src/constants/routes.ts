export enum LAYOUT_ID {
  USER = 'USER_LAYOUT',
}

export enum ROUTE_ID {
  HOME = 'HOME',
  PEOPLE = 'PEOPLE',
  PLANETS = 'PLANETS',
  FILMS = 'FILMS',
  SPECIES = 'SPECIES',
  VEHICLES = 'VEHICLES',
  STARSHIPS = 'STARSHIPS',
  PEOPLE_DETAILS = 'PEOPLE_DETAIL',
  PLANETS_DETAIL = 'PLANETS_DETAIL',
  FILMS_DETAIL = 'FILMS_DETAIL',
  SPECIES_DETAIL = 'SPECIES_DETAIL',
  VEHICLES_DETAIL = 'VEHICLES_DETAIL',
  STARSHIPS_DETAIL = 'STARSHIPS_DETAIL',
}

export const LAYOUT = {
  [LAYOUT_ID.USER]: {
    ID: LAYOUT_ID.USER,
    PATH: '/',
  },
};

export const ROUTES = {
  [ROUTE_ID.HOME]: {
    ID: ROUTE_ID.HOME,
    PATH: '/',
  },
  [ROUTE_ID.PEOPLE]: {
    ID: ROUTE_ID.PEOPLE,
    PATH: '/people',
  },
  [ROUTE_ID.PLANETS]: {
    ID: ROUTE_ID.PLANETS,
    PATH: '/planets',
  },
  [ROUTE_ID.FILMS]: {
    ID: ROUTE_ID.FILMS,
    PATH: '/films',
  },
  [ROUTE_ID.SPECIES]: {
    ID: ROUTE_ID.SPECIES,
    PATH: '/species',
  },
  [ROUTE_ID.VEHICLES]: {
    ID: ROUTE_ID.VEHICLES,
    PATH: '/vehicles',
  },
  [ROUTE_ID.STARSHIPS]: {
    ID: ROUTE_ID.STARSHIPS,
    PATH: '/starships',
  },
  [ROUTE_ID.PEOPLE_DETAILS]: {
    ID: ROUTE_ID.PEOPLE_DETAILS,
    PATH: '/people/:id',
  },
  [ROUTE_ID.PLANETS_DETAIL]: {
    ID: ROUTE_ID.PLANETS_DETAIL,
    PATH: '/planets/:id',
  },
  [ROUTE_ID.FILMS_DETAIL]: {
    ID: ROUTE_ID.FILMS_DETAIL,
    PATH: '/films/:id',
  },
  [ROUTE_ID.SPECIES_DETAIL]: {
    ID: ROUTE_ID.SPECIES_DETAIL,
    PATH: '/species/:id',
  },
  [ROUTE_ID.VEHICLES_DETAIL]: {
    ID: ROUTE_ID.VEHICLES_DETAIL,
    PATH: '/vehicles/:id',
  },
  [ROUTE_ID.STARSHIPS_DETAIL]: {
    ID: ROUTE_ID.STARSHIPS_DETAIL,
    PATH: '/starships/:id',
  },
};
