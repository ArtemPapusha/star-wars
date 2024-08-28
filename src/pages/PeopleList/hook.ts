import { useEffect } from 'react';

import type { PaginationProps } from 'antd';
import { useSelector, useDispatch } from 'react-redux';

import { peopleSelectors, peopleActions } from '@store/people';

const useContainer = () => {

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

  useEffect(() => {
    dispatch(peopleActions.fetchPeopleAction(currentPage));
  }, [dispatch, currentPage]);

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
