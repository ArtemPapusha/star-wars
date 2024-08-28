import { useCallback, useEffect, useMemo } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { useMatches } from 'react-router-dom';

import SpeciesAPI from '@services/SpeciesAPI';
import { speciesSelectors, speciesActions } from '@store/species';

const useContainer = () => {
  const matches = useMatches();
  const id = matches.at(-1)?.params?.id ?? '';
  const speciesApi = useMemo(() => new SpeciesAPI(), []);

  const dispatch = useDispatch();

  const item = useSelector(speciesSelectors.specieSelector);
  const loader = useSelector(speciesSelectors.speciesLoaderSelector);

  const fetchData = useCallback(
    async (id: string) => {
      dispatch(speciesActions.setSpeciesLoaderAction(true));
      try {
        const responseData = await speciesApi.fetchSpeciesDataId(id);

        dispatch(speciesActions.setSpecieAction(responseData));
      } catch (error) {
        console.log('Error fetching data:', error);
      } finally {
        dispatch(speciesActions.setSpeciesLoaderAction(false));
      }
    },
    [dispatch, speciesApi],
  );

  useEffect(() => {
    fetchData(id);
  }, [dispatch, fetchData, id, speciesApi]);

  return {
    item,
    loader
  };
};

export default useContainer;
