import { useCallback, useEffect, useMemo } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { useMatches } from 'react-router-dom';

import StarshipsAPI from '@services/StarshipsAPI';
import { starshipsSelectors, starshipsActions } from '@store/starships';

const useContainer = () => {
  const matches = useMatches();
  const id = matches.at(-1)?.params?.id ?? '';
  const starshipsApi = useMemo(() => new StarshipsAPI(), []);

  const dispatch = useDispatch();

  const item = useSelector(starshipsSelectors.starshipSelector);
  const loader = useSelector(starshipsSelectors.starshipsLoaderSelector);

  const fetchData = useCallback(
    async (id: string) => {
      dispatch(starshipsActions.setStarshipsLoaderAction(true));
      try {
        const responseData = await starshipsApi.fetchStarshipsDataId(id);

        dispatch(starshipsActions.setStarshipAction(responseData));
      } catch (error) {
        console.log('Error fetching data:', error);
      } finally {
        dispatch(starshipsActions.setStarshipsLoaderAction(false));
      }
    },
    [dispatch, starshipsApi],
  );

  useEffect(() => {
    fetchData(id);
  }, [dispatch, fetchData, id, starshipsApi]);

  return {
    item,
    loader
  };
};

export default useContainer;
