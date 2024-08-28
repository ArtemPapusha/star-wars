import { useCallback, useEffect, useMemo } from 'react';

import type { PaginationProps } from 'antd';
import { useSelector, useDispatch } from 'react-redux';

import FilmsAPI from '@services/FilmsAPI';
import { filmsSelectors, filmsActions } from '@store/films';

const useContainer = () => {
  
  const filmsApi = useMemo(() => new FilmsAPI(), []);

  const dispatch = useDispatch();

  const items = useSelector(filmsSelectors.filmsItemsSelector);
  const currentPage = useSelector(filmsSelectors.currentPageSelector);
  const totalItems = useSelector(filmsSelectors.filmsCountSelector);
  const loader = useSelector(filmsSelectors.filmsLoaderSelector);

  const refreshPagination = () => {
    return () => {
      dispatch(filmsActions.setCurrentPageAction(1));
    };
  };

  const onChange: PaginationProps['onChange'] = (page: number) => {
    dispatch(filmsActions.setCurrentPageAction(page));
  };

  const fetchData = useCallback(
    async (page: number | undefined) => {
      dispatch(filmsActions.setFilmsLoaderAction(true));
      try {
        const responseData = await filmsApi.fetchFilmsData(page);
        console.log(responseData);

        dispatch(filmsActions.setFilmsItemsAction(responseData.results));
        dispatch(filmsActions.setFilmsCountAction(responseData.count));
      } catch (error) {
        console.log('Error fetching data:', error);
      } finally {
        dispatch(filmsActions.setFilmsLoaderAction(false));
      }
    },
    [dispatch, filmsApi],
  );

  useEffect(() => {
    fetchData(currentPage);
  }, [currentPage, dispatch, fetchData, filmsApi]);

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
