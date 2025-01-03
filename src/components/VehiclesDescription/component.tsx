import { Card } from 'antd';
import { Link } from 'react-router-dom';

import { ROUTE_ID, ROUTES } from '@constants/routes';
import '@assets/styles/components/card.scss';
import type { ResultDataType } from '@services/types';

const VehiclesDescription: React.FC<{
  item: ResultDataType;
}> = ({ item }) => {
  return (
    <Card
      key={item.uid}
      extra={
        <Link to={`${ROUTES[ROUTE_ID.VEHICLES].PATH}/${item.uid}`}>More</Link>
      }
      className="card"
    >
      {item.name}
    </Card>
  );
};

export default VehiclesDescription;
