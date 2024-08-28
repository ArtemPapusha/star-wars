import type { PeopleDataType } from '@services/types';

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
  ): Promise<PeopleDataType> => {
    try {
      const response = await fetch(
        `https://swapi.dev/api/people/?page=${page}`,
      );

      return await response.json();
    } catch (error) {
      console.error('Error fetching people data: ', error);
      throw error; //
    }
  };

  public fetchPeopleDataId = async (id: string) => {
    try {
      const response = await fetch(`https://swapi.dev/api/people/${id}`);

      return response.json();
    } catch (error) {
      console.error('Error fetching people data by ID: ', error);
      throw error;
    }
  };
}

export default PeopleAPI;
