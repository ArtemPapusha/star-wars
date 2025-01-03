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
        id: ROUTES[ROUTE_ID.PEOPLE].ID,
        path: ROUTES[ROUTE_ID.PEOPLE].PATH,
        element: <PeopleList />,
      },
      {
        id: ROUTES[ROUTE_ID.PEOPLE_DETAILS].ID,
        path: ROUTES[ROUTE_ID.PEOPLE_DETAILS].PATH,
        element: <People />,
      },
      {
        id: ROUTES[ROUTE_ID.PLANETS].ID,
        path: ROUTES[ROUTE_ID.PLANETS].PATH,
        element: <PlanetList />,
      },
      {
        id: ROUTES[ROUTE_ID.PLANETS_DETAIL].ID,
        path: ROUTES[ROUTE_ID.PLANETS_DETAIL].PATH,
        element: <Planet />,
      },
      {
        id: ROUTES[ROUTE_ID.FILMS].ID,
        path: ROUTES[ROUTE_ID.FILMS].PATH,
        element: <FilmList />,
      },
      {
        id: ROUTES[ROUTE_ID.FILMS_DETAIL].ID,
        path: ROUTES[ROUTE_ID.FILMS_DETAIL].PATH,
        element: <Film />,
      },
      {
        id: ROUTES[ROUTE_ID.SPECIES].ID,
        path: ROUTES[ROUTE_ID.SPECIES].PATH,
        element: <SpecieList />,
      },
      {
        id: ROUTES[ROUTE_ID.SPECIES_DETAIL].ID,
        path: ROUTES[ROUTE_ID.SPECIES_DETAIL].PATH,
        element: <Specie />,
      },
      {
        id: ROUTES[ROUTE_ID.VEHICLES].ID,
        path: ROUTES[ROUTE_ID.VEHICLES].PATH,
        element: <VehicleList />,
      },
      {
        id: ROUTES[ROUTE_ID.VEHICLES_DETAIL].ID,
        path: ROUTES[ROUTE_ID.VEHICLES_DETAIL].PATH,
        element: <Vehicle />,
      },
      {
        id: ROUTES[ROUTE_ID.STARSHIPS].ID,
        path: ROUTES[ROUTE_ID.STARSHIPS].PATH,
        element: <StarshipList />,
      },
      {
        id: ROUTES[ROUTE_ID.STARSHIPS_DETAIL].ID,
        path: ROUTES[ROUTE_ID.STARSHIPS_DETAIL].PATH,
        element: <Starship />,
      },
    ],
  },
]);

export default router;
