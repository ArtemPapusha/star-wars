import type { PlanetsDataType } from '@services/types';

class PlanetsAPI {
  protected static instance: PlanetsAPI | null = null;

  constructor() {
    if (PlanetsAPI.instance) {
      return PlanetsAPI.instance;
    }

    PlanetsAPI.instance = this;
    return this;
  }

  public fetchPlanetsData = async (
    page: number | undefined,
  ): Promise<PlanetsDataType> => {
    try {
      const response = await fetch(
        `https://swapi.dev/api/planets/?page=${page}`,
      );

      return await response.json();
    } catch (error) {
      console.error('Error fetching planets data: ', error);
      throw error; //
    }
  };

  public fetchPlanetsDataId = async (id: string) => {
    try {
      const response = await fetch(`https://swapi.dev/api/planets/${id}`);

      return response.json();
    } catch (error) {
      console.error('Error fetching planets data by ID: ', error);
      throw error;
    }
  };
}

export default PlanetsAPI;
