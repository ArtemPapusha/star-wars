import { Card, Tag, Typography } from 'antd';
import { Link } from 'react-router-dom';

import { LAYOUT, LAYOUT_ID } from '@constants/routes';
import type { SpecieType } from '@pages/SpecieList/types';

import '@assets/styles/components/card.scss';

const SpeciesDescription: React.FC<{
  item: Omit<SpecieType, 'films' | 'people'>;
}> = ({ item }) => {
  const { Paragraph } = Typography;

  const id = (item: SpecieType['url']) =>
    item?.split('/')[item?.split('/').length - 2] || '';

  return (
    <Card
      key={item.name}
      title={item.name}
      extra={
        <Link to={`${LAYOUT[LAYOUT_ID.SPECIES].PATH}/${id(item.url)}`}>
          More
        </Link>
      }
      className="card"
    >
      <Paragraph>
        Classification: <Tag> {item.classification}</Tag>
      </Paragraph>
      <Paragraph>
        Designation: <Tag> {item.designation}</Tag>
      </Paragraph>
      <Paragraph>
        Language: <Tag> {item.language}</Tag>
      </Paragraph>
    </Card>
  );
};

export default SpeciesDescription;
