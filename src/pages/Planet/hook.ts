import { useCallback, useEffect, useMemo } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { useMatches } from 'react-router-dom';

import PlanetsAPI from '@services/PlanetsAPI';
import { planetsSelectors, palnetsActions } from '@store/planets';

const useContainer = () => {
  const matches = useMatches();
  const id = matches.at(-1)?.params?.id ?? '';
  const planetsApi = useMemo(() => new PlanetsAPI(), []);

  const dispatch = useDispatch();

  const item = useSelector(planetsSelectors.planetSelector);
  const loader = useSelector(planetsSelectors.planetsLoaderSelector);

  const fetchData = useCallback(
    async (id: string) => {
      dispatch(palnetsActions.setPlanetsLoader(true));
      try {
        const responseData = await planetsApi.fetchPlanetsDataId(id);

        dispatch(palnetsActions.setPlanet(responseData));
      } catch (error) {
        console.log('Error fetching data:', error);
      } finally {
        dispatch(palnetsActions.setPlanetsLoader(false));
      }
    },
    [dispatch, planetsApi],
  );

  useEffect(() => {
    fetchData(id);
  }, [dispatch, fetchData, id, planetsApi]);

  return {
    item,
    loader
  };
};

export default useContainer;
