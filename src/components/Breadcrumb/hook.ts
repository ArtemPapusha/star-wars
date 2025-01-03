import { useMemo } from 'react';

import type { ItemType } from 'antd/es/breadcrumb/Breadcrumb';
import { useMatches } from 'react-router-dom';

import { ROUTE_ID, ROUTES } from '@constants/routes';

const useContainer = () => {
  const matches = useMatches();

  const isHome = matches?.at(-1)?.id === ROUTE_ID.HOME;

  const crumbs = useMemo(() => {
    const lastItem = matches?.at(-1)?.id;
    const isDetails = (lastItem?.split('_')?.at(-1) ?? '') === 'DETAIL';

    if (isDetails) {
      const data = [...matches];

      data.splice(1, 0, {
        id: ROUTES[(lastItem?.split('_')?.at(-2) as keyof typeof ROUTES) ?? '']
          .ID,
        pathname:
          ROUTES[(lastItem?.split('_')?.at(-2) as keyof typeof ROUTES) ?? '']
            .PATH,
        params: { id: undefined },
        data: undefined,
        handle: undefined,
      });

      return data;
    }
    return matches;
  }, [matches]);

  const routes: ItemType[] = useMemo(
    () =>
      crumbs.map(({ id, pathname, params }, index) => ({
        breadcrumbName: id,
        path: pathname,
        key: index,
        href: params?.id,
      })),
    [crumbs],
  );

  return {
    routes,
    isHome,
  };
};

export default useContainer;
