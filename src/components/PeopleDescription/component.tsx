import { Card, Typography, Tag } from 'antd';
import { Link } from 'react-router-dom';

import { LAYOUT, LAYOUT_ID } from '@constants/routes';
import type { PersonType } from '@pages/PeopleList/types';

import '@assets/styles/components/card.scss';

const PeopleDescription: React.FC<{
  item: Omit<PersonType, 'films' | 'vehicles' | 'starships' | 'species'>;
}> = ({ item }) => {
  const { Paragraph } = Typography;

  const id = (item: PersonType['url']) =>
    item?.split('/')[item?.split('/').length - 2] || '';

  return (
    <Card
      key={item.name}
      title={item.name}
      extra={
        <Link to={`${LAYOUT[LAYOUT_ID.PEOPLE].PATH}/${id(item.url)}`}>
          More
        </Link>
      }
      className="card"
    >
      <Paragraph>
        Height: <Tag> {item.height}</Tag>
      </Paragraph>
      <Paragraph>
        Mass: <Tag> {item.mass}</Tag>
      </Paragraph>
      <Paragraph>
        Eye color: <Tag> {item.eye_color}</Tag>
      </Paragraph>
      <Paragraph>
        Skin color: <Tag> {item.skin_color}</Tag>
      </Paragraph>
      <Paragraph>
        Birth year: <Tag> {item.birth_year}</Tag>
      </Paragraph>
      <Paragraph>
        Gender: <Tag> {item.gender}</Tag>
      </Paragraph>
    </Card>
  );
};

export default PeopleDescription;
