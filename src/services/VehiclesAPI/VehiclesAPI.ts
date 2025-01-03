import type { DataType } from '@services/types';

class VehiclesAPI {
  protected static instance: VehiclesAPI | null = null;

  constructor() {
    if (VehiclesAPI.instance) {
      return VehiclesAPI.instance;
    }

    VehiclesAPI.instance = this;
    return this;
  }

  public fetchVehiclesData = async (
    page: number | undefined,
  ): Promise<DataType> => {
    try {
      const response = await fetch(
        `https://www.swapi.tech/api/vehicles?page=${page}&limit=10`,
      );

      return await response.json();
    } catch (error) {
      console.error('Error fetching vehicles data: ', error);
      throw error; //
    }
  };

  public fetchVehiclesDataId = async (id: string) => {
    try {
      const response = await fetch(`https://www.swapi.tech/api/vehicles/${id}`);

      return response.json();
    } catch (error) {
      console.error('Error fetching vehicles data by ID: ', error);
      throw error;
    }
  };
}

export default VehiclesAPI;
