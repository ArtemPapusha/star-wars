import { Spin } from 'antd';

import FilmDetails from '@components/FilmDetails';

import useContainer from './hook';

const Film: React.FC = () => {
  const { item, loader } = useContainer();
  return  <>{loader ? <Spin size="large" /> : <FilmDetails item={item} />}</>;
  
};

export default Film;
