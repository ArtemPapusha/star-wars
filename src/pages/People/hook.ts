import { useCallback, useEffect, useMemo } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { useMatches } from 'react-router-dom';

import PeopleAPI from '@services/PeopleAPI';
import { peopleSelectors, peopleActions } from '@store/people';

const useContainer = () => {
  const matches = useMatches();
  const id = matches.at(-1)?.params?.id ?? '';
  const peopleApi = useMemo(() => new PeopleAPI(), []);

  const dispatch = useDispatch();

  const item = useSelector(peopleSelectors.personSelector);
  const loader = useSelector(peopleSelectors.peopleLoaderSelector);

  const fetchData = useCallback(
    async (id: string) => {
      dispatch(peopleActions.setPeopleLoaderAction(true));
      try {
        const responseData = await peopleApi.fetchPeopleDataId(id);

        dispatch(peopleActions.setPersonAction(responseData));
      } catch (error) {
        console.log('Error fetching data:', error);
      } finally {
        dispatch(peopleActions.setPeopleLoaderAction(false));
      }
    },
    [dispatch, peopleApi],
  );

  useEffect(() => {
    fetchData(id);
  }, [dispatch, fetchData, id]);
  return {
    item,
    loader,
  };
};

export default useContainer;
