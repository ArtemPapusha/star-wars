import { Breadcrumb as AntBreadcrumb } from 'antd';

import getItemRender from './getItemRender';
import useContainer from './hook';

const Breadcrumb: React.FC = () => {
  const { routes } = useContainer();

  if (routes.length <= 1) {
    return null;
  }

  return (
    <AntBreadcrumb
      style={{ color: '#fff', marginBottom: 20 }}
      items={routes}
      itemRender={getItemRender}
    />
  );
};

export default Breadcrumb;
