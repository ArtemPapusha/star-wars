import { useCallback, useEffect, useMemo } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { useMatches } from 'react-router-dom';

import VehiclesAPI from '@services/VehiclesAPI';
import { vehiclesSelectors, vehiclesActions } from '@store/vehicles';

const useContainer = () => {
  const matches = useMatches();
  const id = matches.at(-1)?.params?.id ?? '';
  const vehiclesApi = useMemo(() => new VehiclesAPI(), []);

  const dispatch = useDispatch();

  const item = useSelector(vehiclesSelectors.vehicleSelector);
  const loader = useSelector(vehiclesSelectors.vehiclesLoaderSelector);

  const fetchData = useCallback(
    async (id: string) => {
      dispatch(vehiclesActions.setVehiclesLoaderAction(true));
      try {
        const responseData = await vehiclesApi.fetchVehiclesDataId(id);

        dispatch(vehiclesActions.setVehicleAction(responseData));
      } catch (error) {
        console.log('Error fetching data:', error);
      } finally {
        dispatch(vehiclesActions.setVehiclesLoaderAction(false));
      }
    },
    [dispatch, vehiclesApi],
  );

  useEffect(() => {
    fetchData(id);
  }, [dispatch, fetchData, id, vehiclesApi]);

  return {
    item,
    loader
  };
};

export default useContainer;
