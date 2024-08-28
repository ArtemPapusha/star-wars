import type { AnyObject } from 'antd/es/_util/type';
import type { ItemType } from 'antd/es/breadcrumb/Breadcrumb';
import { FormattedMessage } from 'react-intl';

import { TITLE } from './constants';
import Item from './Item';

const getItemRender = (
  { breadcrumbName, path, key, href }: ItemType,
  _: AnyObject,
  routes: ItemType[],
) => {
  const isLastItem = key === routes.length - 1;

  if (typeof breadcrumbName !== 'string') {
    return null;
  }

  return (
    <Item
      title={
        isLastItem && href ? (
          href
        ) : (
          <FormattedMessage id={TITLE[breadcrumbName]} />
        )
      }
      isLastItem={isLastItem}
      pathname={path}
    />
  );
};

export default getItemRender;
