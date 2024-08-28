import { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { useMatches } from 'react-router-dom';

import { peopleSelectors, peopleActions } from '@store/people';

const useContainer = () => {
  const matches = useMatches();

  const id = matches.at(-1)?.params?.id ?? '';

  const dispatch = useDispatch();

  const item = useSelector(peopleSelectors.personSelector);
  const loader = useSelector(peopleSelectors.peopleLoaderSelector);

  useEffect(() => {
    dispatch(peopleActions.fetchPeopleIdAction(id))
  }, [dispatch, id]);

  return {
    item,
    loader
  };
};

export default useContainer;
