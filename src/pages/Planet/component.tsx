import { Spin } from 'antd';

import PlanetDetails from '@components/PlanetDetails';

import useContainer from './hook';

const Planet: React.FC = () => {
  const { item, loader } = useContainer();

  if (loader) return <Spin size="large" />;

  return <PlanetDetails item={item} />;
};

export default Planet;
