import { useMemo } from 'react';

import type { ItemType } from 'antd/es/breadcrumb/Breadcrumb';
import { useMatches } from 'react-router-dom';

import { ROUTER_ID_INDEX_PAGE_POSTFIX } from '@constants/routes';

const useContainer = () => {
  const matches = useMatches();

  const crumbs = useMemo(() => {
    const lastItem = matches?.at(-1)?.id;
    const isIndex =
      (lastItem?.split('_')?.at(-1) ?? '') === ROUTER_ID_INDEX_PAGE_POSTFIX;

    if (isIndex) {
      const data = [...matches];
      data.pop();
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
  };
};

export default useContainer;
