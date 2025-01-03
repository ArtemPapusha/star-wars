import type { DataType } from '@services/types';

class PeopleAPI {
  protected static instance: PeopleAPI | null = null;

  constructor() {
    if (PeopleAPI.instance) {
      return PeopleAPI.instance;
    }

    PeopleAPI.instance = this;
    return this;
  }

  public fetchPeopleData = async (
    page: number | undefined,
  ): Promise<DataType> => {
    try {
      const response = await fetch(
        `https://www.swapi.tech/api/people?page=${page}&limit=10`,
      );
      return await response.json();
    } catch (error) {
      console.error('Error fetching people data: ', error);
      throw error;
    }
  };

  public fetchPeopleDataId = async (id: string) => {
    try {
      const response = await fetch(`https://www.swapi.tech/api/people/${id}`);

      return response.json();
    } catch (error) {
      console.error('Error fetching people data by ID: ', error);
      throw error;
    }
  };
}

export default PeopleAPI;
