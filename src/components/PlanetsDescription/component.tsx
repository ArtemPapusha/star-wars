import { Card, Typography, Tag } from 'antd';
import { Link } from 'react-router-dom';

import { LAYOUT, LAYOUT_ID } from '@constants/routes';
import type { PlanetType } from '@pages/PlanetList/types';

import '@assets/styles/components/card.scss';

const PlanetsDescription: React.FC<{
  item: Omit<PlanetType, 'residents' | 'films'>;
}> = ({ item }) => {
  const { Paragraph } = Typography;

  const id = (item: PlanetType['url']) =>
    item?.split('/')[item?.split('/').length - 2] || '';

  return (
    <Card
      key={item.name}
      title={item.name}
      extra={
        <Link to={`${LAYOUT[LAYOUT_ID.PLANETS].PATH}/${id(item.url)}`}>
          More
        </Link>
      }
      className="card"
    >
      <Paragraph>
        Climate: <Tag> {item.climate}</Tag>
      </Paragraph>
      <Paragraph>
        Population: <Tag> {item.population}</Tag>
      </Paragraph>
    </Card>
  );
};

export default PlanetsDescription;
