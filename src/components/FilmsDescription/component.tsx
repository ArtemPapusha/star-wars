import { Card, Tag, Typography } from 'antd';
import { Link } from 'react-router-dom';

import { ROUTE_ID, ROUTES } from '@constants/routes';
import type { ResultFilmType } from '@pages/FilmList/types';

import '@assets/styles/components/card.scss';

const FilmsDescription: React.FC<{
  item: ResultFilmType;
}> = ({ item }) => {
  const { Paragraph } = Typography;

  return (
    <Card
      key={item.uid}
      title={item.properties.title}
      extra={
        <Link to={`${ROUTES[ROUTE_ID.FILMS].PATH}/${item.uid}`}>More</Link>
      }
      className="card"
    >
      <Paragraph>
        Episode: <Tag> {item.properties.episode_id}</Tag>
      </Paragraph>
      <Paragraph>
        Release date: <Tag> {item.properties.release_date}</Tag>
      </Paragraph>
    </Card>
  );
};

export default FilmsDescription;
