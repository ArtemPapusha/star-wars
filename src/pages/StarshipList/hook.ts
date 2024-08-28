import { useCallback, useEffect, useMemo } from 'react';

import type { PaginationProps } from 'antd';
import { useSelector, useDispatch } from 'react-redux';

import StarshipsAPI from '@services/StarshipsAPI';
import { starshipsSelectors, starshipsActions } from '@store/starships';

const useContainer = () => {
  const starshipsApi = useMemo(() => new StarshipsAPI(), []);

  const dispatch = useDispatch();

  const items = useSelector(starshipsSelectors.starshipsItemsSelector);
  const currentPage = useSelector(starshipsSelectors.currentPageSelector);
  const totalItems = useSelector(starshipsSelectors.starshipsCountSelector);
  const loader = useSelector(starshipsSelectors.starshipsLoaderSelector);

  const refreshPagination = () => {
    return () => {
      dispatch(starshipsActions.setCurrentPageAction(1));
    };
  };

  const onChange: PaginationProps['onChange'] = (page: number) => {
    dispatch(starshipsActions.setCurrentPageAction(page));
  };

  const fetchData = useCallback(
    async (page: number | undefined) => {
      dispatch(starshipsActions.setStarshipsLoaderAction(true));
      try {
        const responseData = await starshipsApi.fetchStarshipsData(page);

        dispatch(
          starshipsActions.setStarshipsItemsAction(responseData.results),
        );
        dispatch(starshipsActions.setStarshipsCountAction(responseData.count));
      } catch (error) {
        console.log('Error fetching data:', error);
      } finally {
        dispatch(starshipsActions.setStarshipsLoaderAction(false));
      }
    },
    [dispatch, starshipsApi],
  );

  useEffect(() => {
    fetchData(currentPage);
  }, [currentPage, dispatch, fetchData, starshipsApi]);

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
