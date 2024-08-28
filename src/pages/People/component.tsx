import { Spin } from 'antd';

import PeopleDetails from '@components/PeopleDetails';

import useContainer from './hook';

const People: React.FC = () => {
  const { item, loader } = useContainer();

  return <>{loader ? <Spin size="large" /> : <PeopleDetails item={item} />}</>;
};

export default People;
