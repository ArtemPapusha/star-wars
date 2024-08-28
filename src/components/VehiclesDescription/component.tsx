import { Card, Tag, Typography } from 'antd';
import { Link } from 'react-router-dom';

import { LAYOUT, LAYOUT_ID } from '@constants/routes';
import type { VehicleType } from '@pages/VehicleList/types';

import '@assets/styles/components/card.scss';

const VehiclesDescription: React.FC<{
  item: Omit<VehicleType, 'films' | 'pilots'>;
}> = ({ item }) => {
  const { Paragraph } = Typography;

  const id = (item: VehicleType['url']) =>
    item?.split('/')[item?.split('/').length - 2] || '';

  return (
    <Card
      key={item.model}
      title={item.model}
      extra={
        <Link to={`${LAYOUT[LAYOUT_ID.VEHICLES].PATH}/${id(item.url)}`}>
          More
        </Link>
      }
      className="card"
    >
      <Paragraph>
        Max atmosphering speed: <Tag> {item.max_atmosphering_speed}</Tag>
      </Paragraph>
      <Paragraph>
        Passengers: <Tag> {item.passengers}</Tag>
      </Paragraph>
      <Paragraph>
        Vehicle class: <Tag> {item.vehicle_class}</Tag>
      </Paragraph>
    </Card>
  );
};

export default VehiclesDescription;
