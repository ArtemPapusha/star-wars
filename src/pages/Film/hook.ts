import { useCallback, useEffect, useMemo } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { useMatches } from 'react-router-dom';

import FilmsAPI from '@services/FilmsAPI';
import { filmsSelectors, filmsActions } from '@store/films';

const useContainer = () => {
  const matches = useMatches();
  const id = matches.at(-1)?.params?.id ?? '';
  const filmsApi = useMemo(() => new FilmsAPI(), []);

  const dispatch = useDispatch();

  const item = useSelector(filmsSelectors.filmSelector);
  const loader = useSelector(filmsSelectors.filmsLoaderSelector);

  const fetchData = useCallback(
    async (id: string) => {
      dispatch(filmsActions.setFilmsLoaderAction(true));
      try {
        const responseData = await filmsApi.fetchFilmsDataId(id);
        console.log(responseData);

        dispatch(filmsActions.setFilmAction(responseData));
      } catch (error) {
        console.log('Error fetching data:', error);
      } finally {
        dispatch(filmsActions.setFilmsLoaderAction(false));
      }
    },
    [dispatch, filmsApi],
  );

  useEffect(() => {
    fetchData(id);
  }, [dispatch, fetchData, id, filmsApi]);

  return {
    item,
    loader
  };
};

export default useContainer;
