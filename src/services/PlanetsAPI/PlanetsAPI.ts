import type { DataType } from '@services/types';

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
  ): Promise<DataType> => {
    try {
      const response = await fetch(
        `https://www.swapi.tech/api/planets?page=${page}&limit=10`,
      );

      return await response.json();
    } catch (error) {
      console.error('Error fetching planets data: ', error);
      throw error; //
    }
  };

  public fetchPlanetsDataId = async (id: string) => {
    try {
      const response = await fetch(`https://www.swapi.tech/api/planets/${id}`);

      return response.json();
    } catch (error) {
      console.error('Error fetching planets data by ID: ', error);
      throw error;
    }
  };
}

export default PlanetsAPI;
