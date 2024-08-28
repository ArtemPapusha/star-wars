import type { FilmType } from '@pages/FilmList/types';
import type { PersonType } from '@pages/PeopleList/types';
import type { PlanetType } from '@pages/PlanetList/types';
import type { SpecieType } from '@pages/SpecieList/types';
import type { StarshipType } from '@pages/StarshipList/types';
import type { VehicleType } from '@pages/VehicleList/types';

export interface PeopleDataType {
  data: {
    count: number | undefined;
    results: PersonType[];
  }

}

export interface PlanetsDataType {
  count: number | undefined;
  results: PlanetType[];
}

export interface FilmsDataType {
  count: number | undefined;
  results: FilmType[];
}
export interface SpeciesDataType {
  count: number | undefined;
  results: SpecieType[];
}
export interface VehiclesDataType {
  count: number | undefined;
  results: VehicleType[];
}
export interface StarshipsDataType {
  count: number | undefined;
  results: StarshipType[];
}

