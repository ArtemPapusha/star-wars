import { Spin } from 'antd';

import VehicleDetails from '@components/VehicleDetails';

import useContainer from './hook';

const Vehicle: React.FC = () => {
  const { item, loader } = useContainer();

  return <>{loader ? <Spin size="large" /> : <VehicleDetails item={item} />}</>;
};

export default Vehicle;
