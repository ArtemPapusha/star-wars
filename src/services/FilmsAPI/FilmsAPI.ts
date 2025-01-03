import type { FilmDataType, ResultFilmType } from '@pages/FilmList/types';

class FilmsAPI {
  protected static instance: FilmsAPI | null = null;

  constructor() {
    if (FilmsAPI.instance) {
      return FilmsAPI.instance;
    }

    FilmsAPI.instance = this;
    return this;
  }

  public fetchFilmsData = async (): Promise<FilmDataType> => {
    try {
      const response = await fetch(`https://www.swapi.tech/api/films`);

      return await response.json();
    } catch (error) {
      console.error('Error fetching films data: ', error);
      throw error; //
    }
  };

  public fetchFilmsDataId = async (
    id: string,
  ): Promise<{ message: string; result: ResultFilmType }> => {
    try {
      const response = await fetch(`https://www.swapi.tech/api/films/${id}`);

      return response.json();
    } catch (error) {
      console.error('Error fetching films data by ID: ', error);
      throw error;
    }
  };
}

export default FilmsAPI;
