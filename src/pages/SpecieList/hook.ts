import { useCallback, useEffect, useMemo } from 'react';

import type { PaginationProps } from 'antd';
import { useSelector, useDispatch } from 'react-redux';

import SpeciesAPI from '@services/SpeciesAPI';
import { speciesSelectors, speciesActions } from '@store/species';

const useContainer = () => {
  const speciesApi = useMemo(() => new SpeciesAPI(), []);

  const dispatch = useDispatch();

  const items = useSelector(speciesSelectors.speciesItemsSelector);
  const currentPage = useSelector(speciesSelectors.currentPageSelector);
  const totalItems = useSelector(speciesSelectors.speciesCountSelector);
  const loader = useSelector(speciesSelectors.speciesLoaderSelector);

  const refreshPaginstion = () => {
    return () => {
      dispatch(speciesActions.setCurrentPageAction(1));
    };
  };

  const onChange: PaginationProps['onChange'] = (page: number) => {
    dispatch(speciesActions.setCurrentPageAction(page));
  };

  const fetchData = useCallback(
    async (page: number | undefined) => {
      dispatch(speciesActions.setSpeciesLoaderAction(true));
      try {
        const responseData = await speciesApi.fetchSpeciesData(page);
        console.log(responseData);

        dispatch(speciesActions.setSpeciesItemsAction(responseData.results));
        dispatch(speciesActions.setSpeciesCountAction(responseData.count));
      } catch (error) {
        console.log('Error fetching data:', error);
      } finally {
        dispatch(speciesActions.setSpeciesLoaderAction(false));
      }
    },
    [dispatch, speciesApi],
  );

  useEffect(() => {
    fetchData(currentPage);
  }, [currentPage, dispatch, fetchData, speciesApi]);

  useEffect(refreshPaginstion, [dispatch]);

  return {
    items,
    onChange,
    currentPage,
    totalItems,
    loader
  };
};

export default useContainer;
