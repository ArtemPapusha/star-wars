import { useCallback, useEffect, useMemo } from 'react';

import type { PaginationProps } from 'antd';
import { useSelector, useDispatch } from 'react-redux';

import PeopleAPI from '@services/PeopleAPI';
import { peopleSelectors, peopleActions } from '@store/people';

const useContainer = () => {
  const peopleApi = useMemo(() => new PeopleAPI(), []);

  const dispatch = useDispatch();

  const items = useSelector(peopleSelectors.peopleItemsSelector);
  const currentPage = useSelector(peopleSelectors.currentPageSelector);
  const totalItems = useSelector(peopleSelectors.peopleCountSelector);
  const loader = useSelector(peopleSelectors.peopleLoaderSelector);

  const refreshPagination = () => {
    return () => {
      dispatch(peopleActions.setCurrentPageAction(1));
    };
  };

  const onChange: PaginationProps['onChange'] = (page: number) => {
    dispatch(peopleActions.setCurrentPageAction(page));
  };

  const fetchData = useCallback(
    async (page: number | undefined) => {
      dispatch(peopleActions.setPeopleLoaderAction(true));
      try {
        const responseData = await peopleApi.fetchPeopleData(page);

        dispatch(peopleActions.setPeopleItemsAction(responseData.results));
        dispatch(
          peopleActions.setPeopleCountAction(responseData.total_records),
        );
      } catch (error) {
        console.log('Error fetching data:', error);
      } finally {
        dispatch(peopleActions.setPeopleLoaderAction(false));
      }
    },
    [dispatch, peopleApi],
  );

  useEffect(() => {
    fetchData(currentPage);
  }, [currentPage, dispatch, fetchData]);

  useEffect(refreshPagination, [dispatch]);

  return {
    items,
    onChange,
    currentPage,
    totalItems,
    loader,
  };
};

export default useContainer;
