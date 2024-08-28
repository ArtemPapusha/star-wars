import type { SpeciesDataType } from '@services/types';

class SpeciesAPI {
  protected static instance: SpeciesAPI | null = null;

  constructor() {
    if (SpeciesAPI.instance) {
      return SpeciesAPI.instance;
    }

    SpeciesAPI.instance = this;
    return this;
  }

  public fetchSpeciesData = async (
    page: number | undefined,
  ): Promise<SpeciesDataType> => {
    try {
      const response = await fetch(
        `https://swapi.dev/api/species/?page=${page}`,
      );

      return await response.json();
    } catch (error) {
      console.error('Error fetching species data: ', error);
      throw error; //
    }
  };

  public fetchSpeciesDataId = async (id: string) => {
    try {
      const response = await fetch(`https://swapi.dev/api/species/${id}`);

      return response.json();
    } catch (error) {
      console.error('Error fetching species data by ID: ', error);
      throw error;
    }
  };
}

export default SpeciesAPI;
