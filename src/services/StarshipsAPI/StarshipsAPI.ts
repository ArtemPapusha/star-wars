import type { DataType } from '@services/types';

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
  ): Promise<DataType> => {
    try {
      const response = await fetch(
        `https://www.swapi.tech/api/starships?page=${page}&limit=10`,
      );

      return await response.json();
    } catch (error) {
      console.error('Error fetching starships data: ', error);
      throw error; //
    }
  };

  public fetchStarshipsDataId = async (id: string) => {
    try {
      const response = await fetch(
        `https://www.swapi.tech/api/starships/${id}`,
      );

      return response.json();
    } catch (error) {
      console.error('Error fetching starships data by ID: ', error);
      throw error;
    }
  };
}

export default StarshipsAPI;
