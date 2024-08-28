import { Card, Tag, Typography } from 'antd';
import { Link } from 'react-router-dom';

import { LAYOUT, LAYOUT_ID } from '@constants/routes';
import type { StarshipType } from '@pages/StarshipList/types';

import '@assets/styles/components/card.scss';

const StarshipsDescription: React.FC<{
  item: Omit<StarshipType, 'films' | 'pilots'>;
}> = ({ item }) => {
  const { Paragraph } = Typography;

  const id = (item: string) =>
    item?.split('/')[item?.split('/').length - 2] || '';

  return (
    <Card
      key={item.name}
      title={item.name}
      extra={
        <Link to={`${LAYOUT[LAYOUT_ID.STARSHIPS].PATH}/${id(item.url)}`}>
          More
        </Link>
      }
      className="card"
    >
      <Paragraph>
        Model: <Tag> {item.model}</Tag>
      </Paragraph>
      <Paragraph>
        Starship class: <Tag> {item.starship_class}</Tag>
      </Paragraph>
    </Card>
  );
};

export default StarshipsDescription;
