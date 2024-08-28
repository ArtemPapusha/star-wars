import { createBrowserRouter } from 'react-router-dom';

import { LAYOUT, LAYOUT_ID, ROUTES, ROUTE_ID } from '@constants/routes';
import User from '@layouts/User';
import Film from '@pages/Film';
import FilmList from '@pages/FilmList';
import Home from '@pages/Home';
import People from '@pages/People';
import PeopleList from '@pages/PeopleList';
import Planet from '@pages/Planet';
import PlanetList from '@pages/PlanetList';
import Specie from '@pages/Specie';
import SpecieList from '@pages/SpecieList';
import Starship from '@pages/Starship';
import StarshipList from '@pages/StarshipList';
import Vehicle from '@pages/Vehicle';
import VehicleList from '@pages/VehicleList';

const router = createBrowserRouter([
  {
    id: LAYOUT[LAYOUT_ID.USER].ID,
    path: LAYOUT[LAYOUT_ID.USER].PATH,
    element: <User />,
    children: [
      {
        index: true,
        id: ROUTES[ROUTE_ID.HOME].ID,
        path: ROUTES[ROUTE_ID.HOME].PATH,
        element: <Home />,
      },
      {
        id: LAYOUT[LAYOUT_ID.PEOPLE].ID,
        path: LAYOUT[LAYOUT_ID.PEOPLE].PATH,
        children: [
          {
            index: true,
            id: ROUTES[ROUTE_ID.PEOPLE_INDEX].ID,
            path: ROUTES[ROUTE_ID.PEOPLE_INDEX].PATH,
            element: <PeopleList />,
          },
          {
            id: ROUTES[ROUTE_ID.PEOPLE_DETAILS].ID,
            path: ROUTES[ROUTE_ID.PEOPLE_DETAILS].PATH,
            element: <People />,
          },
        ],
      },
      {
        id: LAYOUT[LAYOUT_ID.PLANETS].ID,
        path: LAYOUT[LAYOUT_ID.PLANETS].PATH,
        children: [
          {
            index: true,
            id: ROUTES[ROUTE_ID.PLANETS_INDEX].ID,
            path: ROUTES[ROUTE_ID.PLANETS_INDEX].PATH,
            element: <PlanetList />,
          },
          {
            id: ROUTES[ROUTE_ID.PLANET_DETAILS].ID,
            path: ROUTES[ROUTE_ID.PLANET_DETAILS].PATH,
            element: <Planet />,
          },
        ],
      },
      {
        id: LAYOUT[LAYOUT_ID.FILMS].ID,
        path: LAYOUT[LAYOUT_ID.FILMS].PATH,
        children: [
          {
            index: true,
            id: ROUTES[ROUTE_ID.FILMS_INDEX].ID,
            path: ROUTES[ROUTE_ID.FILMS_INDEX].PATH,
            element: <FilmList />,
          },
          {
            id: ROUTES[ROUTE_ID.FILM_DETAILS].ID,
            path: ROUTES[ROUTE_ID.FILM_DETAILS].PATH,
            element: <Film />,
          },
        ],
      },
      {
        id: LAYOUT[LAYOUT_ID.SPECIES].ID,
        path: LAYOUT[LAYOUT_ID.SPECIES].PATH,
        children: [
          {
            index: true,
            id: ROUTES[ROUTE_ID.SPECIES_INDEX].ID,
            path: ROUTES[ROUTE_ID.SPECIES_INDEX].PATH,
            element: <SpecieList />,
          },
          {
            id: ROUTES[ROUTE_ID.SPECIE_DETAILS].ID,
            path: ROUTES[ROUTE_ID.SPECIE_DETAILS].PATH,
            element: <Specie />,
          },
        ],
      },
      {
        id: LAYOUT[LAYOUT_ID.VEHICLES].ID,
        path: LAYOUT[LAYOUT_ID.VEHICLES].PATH,
        children: [
          {
            index: true,
            id: ROUTES[ROUTE_ID.VEHICLES_INDEX].ID,
            path: ROUTES[ROUTE_ID.VEHICLES_INDEX].PATH,
            element: <VehicleList />,
          },
          {
            id: ROUTES[ROUTE_ID.VEHICLE_DETAILS].ID,
            path: ROUTES[ROUTE_ID.VEHICLE_DETAILS].PATH,
            element: <Vehicle />,
          },
        ],
      },
      {
        id: LAYOUT[LAYOUT_ID.STARSHIPS].ID,
        path: LAYOUT[LAYOUT_ID.STARSHIPS].PATH,
        children: [
          {
            index: true,
            id: ROUTES[ROUTE_ID.STARSHIPS_INDEX].ID,
            path: ROUTES[ROUTE_ID.STARSHIPS_INDEX].PATH,
            element: <StarshipList />,
          },
          {
            id: ROUTES[ROUTE_ID.STARSHIP_DETAILS].ID,
            path: ROUTES[ROUTE_ID.STARSHIP_DETAILS].PATH,
            element: <Starship />,
          },
        ],
      },
    ],
  },
]);

export default router;
