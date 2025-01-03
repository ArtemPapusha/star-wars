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
  PEOPLE_DETAILS = 'PEOPLE_DETAILS',
  PLANET_DETAILS = 'PLANET_DETAILS',
  FILM_DETAILS = 'FILM_DETAILS',
  SPECIE_DETAILS = 'SPECIE_DETAILS',
  VEHICLE_DETAILS = 'VEHICLE_DETAILS',
  STARSHIP_DETAILS = 'STARSHIP_DETAILS',
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
  [ROUTE_ID.PLANET_DETAILS]: {
    ID: ROUTE_ID.PLANET_DETAILS,
    PATH: '/planets/:id',
  },
  [ROUTE_ID.FILM_DETAILS]: {
    ID: ROUTE_ID.FILM_DETAILS,
    PATH: '/films/:id',
  },
  [ROUTE_ID.SPECIE_DETAILS]: {
    ID: ROUTE_ID.SPECIE_DETAILS,
    PATH: '/species/:id',
  },
  [ROUTE_ID.VEHICLE_DETAILS]: {
    ID: ROUTE_ID.VEHICLE_DETAILS,
    PATH: '/vehicles/:id',
  },
  [ROUTE_ID.STARSHIP_DETAILS]: {
    ID: ROUTE_ID.STARSHIP_DETAILS,
    PATH: '/starships/:id',
  },
};
