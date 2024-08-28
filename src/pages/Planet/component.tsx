import { Spin } from 'antd';

import PlanetDetails from '@components/PlanetDetails';

import useContainer from './hook';

const Planet: React.FC = () => {
  const { item, loader } = useContainer();

  return <>{loader ? <Spin size="large" /> : <PlanetDetails item={item} />}</>;
};

export default Planet;
