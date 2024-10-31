import { useCallback, useEffect, useMemo } from 'react';

import type { PaginationProps } from 'antd';
import { useSelector, useDispatch } from 'react-redux';

import PlanetsAPI from '@services/PlanetsAPI';
import { planetsSelectors, planetsActions } from '@store/planets';

const useContainer = () => {
  const planetsApi = useMemo(() => new PlanetsAPI(), []);

  const dispatch = useDispatch();

  const items = useSelector(planetsSelectors.planetsItemsSelector);
  const currentPage = useSelector(planetsSelectors.currentPageSelector);
  const totalItems = useSelector(planetsSelectors.planetsCountSelector);
  const loader = useSelector(planetsSelectors.planetsLoaderSelector);

  const refreshPagination = () => {
    return () => {
      dispatch(planetsActions.setCurrentPageAction(1));
    };
  };

  const onChange: PaginationProps['onChange'] = (page: number) => {
    dispatch(planetsActions.setCurrentPageAction(page));
  };

  const fetchData = useCallback(
    async (page: number | undefined) => {
      dispatch(planetsActions.setPlanetsLoader(true));
      try {
        const responseData = await planetsApi.fetchPlanetsData(page);
        console.log(responseData);

        dispatch(planetsActions.setPlanetsItems(responseData.results));
        dispatch(planetsActions.setPlanetsCount(responseData.count));
      } catch (error) {
        console.log('Error fetching data:', error);
      } finally {
        dispatch(planetsActions.setPlanetsLoader(false));
      }
    },
    [dispatch, planetsApi],
  );

  useEffect(() => {
    fetchData(currentPage);
  }, [currentPage, dispatch, fetchData, planetsApi]);

  useEffect(refreshPagination, [dispatch]);

  return {
    items,
    onChange,
    currentPage,
    totalItems,
    loader
  };
};

export default useContainer;
