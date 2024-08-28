import { Card, Tag, Typography } from 'antd';
import { Link } from 'react-router-dom';

import { LAYOUT, LAYOUT_ID } from '@constants/routes';
import type { FilmType } from '@pages/FilmList/types';

import '@assets/styles/components/card.scss';

const FilmsDescription: React.FC<{
  item: Omit<
    FilmType,
    'species' | 'vehicles' | 'starships' | 'planets' | 'characters'
  >;
}> = ({ item }) => {
  const { Paragraph } = Typography;

  const id = (item: FilmType['url']) =>
    item?.split('/')[item?.split('/').length - 2] || '';

  return (
    <Card
      key={item.title}
      title={item.title}
      extra={
        <Link to={`${LAYOUT[LAYOUT_ID.FILMS].PATH}/${id(item.url)}`}>More</Link>
      }
      className="card"
    >
      <Paragraph>
        Episode: <Tag> {item.episode_id}</Tag>
      </Paragraph>
      <Paragraph>
        Release date: <Tag> {item.release_date}</Tag>
      </Paragraph>
    </Card>
  );
};

export default FilmsDescription;
