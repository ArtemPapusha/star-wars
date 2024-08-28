import type { FilmsDataType } from '@services/types';

class FilmsAPI {
  protected static instance: FilmsAPI | null = null;

  constructor() {
    if (FilmsAPI.instance) {
      return FilmsAPI.instance;
    }

    FilmsAPI.instance = this;
    return this;
  }

  public fetchFilmsData = async (
    page: number | undefined,
  ): Promise<FilmsDataType> => {
    try {
      const response = await fetch(`https://swapi.dev/api/films/?page=${page}`);

      return await response.json();
    } catch (error) {
      console.error('Error fetching films data: ', error);
      throw error; //
    }
  };

  public fetchFilmsDataId = async (id: string) => {
    try {
      const response = await fetch(`https://swapi.dev/api/films/${id}`);

      return response.json();
    } catch (error) {
      console.error('Error fetching films data by ID: ', error);
      throw error;
    }
  };
}

export default FilmsAPI;
