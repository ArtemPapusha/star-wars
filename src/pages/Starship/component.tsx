import { Spin } from 'antd';

import StarshipDetail from '@components/StarshipDetail';

import useContainer from './hook';

const Starship: React.FC = () => {
  const { item, loader } = useContainer();

  return <>{loader ? <Spin size="large" /> : <StarshipDetail item={item} />}</>;

};

export default Starship;
