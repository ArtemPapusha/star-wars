import { useCallback, useEffect, useMemo } from 'react';

import type { PaginationProps } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { useMatches } from 'react-router-dom';

import VehiclesAPI from '@services/VehiclesAPI';
import { vehiclesSelectors, vehiclesActions } from '@store/vehicles';

const useContainer = () => {
  const matches = useMatches();
  const vehiclesApi = useMemo(() => new VehiclesAPI(), []);

  const dispatch = useDispatch();

  const items = useSelector(vehiclesSelectors.vehiclesItemsSelector);
  const currentPage = useSelector(vehiclesSelectors.currentPageSelector);
  const totalItems = useSelector(vehiclesSelectors.vehiclesCountSelector);
  const loader = useSelector(vehiclesSelectors.vehiclesLoaderSelector);

  const refreshPaginstion = () => {
    return () => {
      dispatch(vehiclesActions.setCurrentPageAction(1));
    };
  };

  const onChange: PaginationProps['onChange'] = (page: number) => {
    dispatch(vehiclesActions.setCurrentPageAction(page));
  };

  const fetchData = useCallback(
    async (page: number | undefined) => {
      dispatch(vehiclesActions.setVehiclesLoaderAction(true));
      try {
        const responseData = await vehiclesApi.fetchVehiclesData(page);
        console.log(responseData);

        dispatch(vehiclesActions.setVehiclesItemsAction(responseData.results));
        dispatch(
          vehiclesActions.setVehiclesCountAction(responseData.total_records),
        );
      } catch (error) {
        console.log('Error fetching data:', error);
      } finally {
        dispatch(vehiclesActions.setVehiclesLoaderAction(false));
      }
    },
    [dispatch, vehiclesApi],
  );

  useEffect(() => {
    fetchData(currentPage);
  }, [currentPage, dispatch, fetchData, vehiclesApi]);

  useEffect(refreshPaginstion, [dispatch]);

  return {
    matches,
    items,
    onChange,
    currentPage,
    totalItems,
    loader,
  };
};

export default useContainer;
