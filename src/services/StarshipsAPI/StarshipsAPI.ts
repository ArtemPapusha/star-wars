import type { StarshipsDataType } from '@services/types';

class StarshipsAPI {
  protected static instance: StarshipsAPI | null = null;

  constructor() {
    if (StarshipsAPI.instance) {
      return StarshipsAPI.instance;
    }

    StarshipsAPI.instance = this;
    return this;
  }

  public fetchStarshipsData = async (
    page: number | undefined,
  ): Promise<StarshipsDataType> => {
    try {
      const response = await fetch(
        `https://swapi.dev/api/starships/?page=${page}`,
      );

      return await response.json();
    } catch (error) {
      console.error('Error fetching starships data: ', error);
      throw error; //
    }
  };

  public fetchStarshipsDataId = async (id: string) => {
    try {
      const response = await fetch(`https://swapi.dev/api/starships/${id}`);

      return response.json();
    } catch (error) {
      console.error('Error fetching starships data by ID: ', error);
      throw error;
    }
  };
}

export default StarshipsAPI;
