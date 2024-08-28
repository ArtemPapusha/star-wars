import { Spin } from 'antd';

import SpecieDetails from '@components/SpecieDetails';

import useContainer from './hook';

const Specie: React.FC = () => {
  const { item, loader } = useContainer();

  return <>{loader ? <Spin size="large" /> : <SpecieDetails item={item} />}</>;
};

export default Specie;
