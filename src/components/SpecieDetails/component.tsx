import { LinkOutlined } from '@ant-design/icons';
import { Descriptions, Tag } from 'antd';
import { Link } from 'react-router-dom';

import { LAYOUT, LAYOUT_ID } from '@constants/routes';
import type { SpecieType } from '@pages/SpecieList/types';

import '@assets/styles/components/category_link.scss';

const SpecieDetails: React.FC<{
  item: Omit<SpecieType, 'url'>;
}> = ({ item }) => {
  const id = (item: string) =>
    item?.split('/')[item?.split('/').length - 2] || '';

  return (
    <div key={item.name}>
      <Descriptions title={item.name} style={{ margin: 10 }} bordered>
        <Descriptions.Item label="Classification">
          {item.classification}
        </Descriptions.Item>
        <Descriptions.Item label="designation">
          {item.designation}
        </Descriptions.Item>
        <Descriptions.Item label="Average height">
          {item.average_height}
        </Descriptions.Item>
        <Descriptions.Item label="Skin colors">
          {item.skin_colors}
        </Descriptions.Item>
        <Descriptions.Item label="Hair colors">
          {item.hair_colors}
        </Descriptions.Item>
        <Descriptions.Item label="Eye colors">
          {item.eye_colors}
        </Descriptions.Item>
        <Descriptions.Item label="Average lifespan">
          {item.average_lifespan}
        </Descriptions.Item>
        <Descriptions.Item label="Homeworld">
          <Tag icon={<LinkOutlined />}>
            <Link
              to={`${LAYOUT[LAYOUT_ID.PLANETS].PATH}/${id(item.homeworld)}`}
            >
              Homeworld {id(item.homeworld)}{' '}
            </Link>
          </Tag>
        </Descriptions.Item>
        <Descriptions.Item label="language">{item.language}</Descriptions.Item>
        <Descriptions.Item label="People">
          {item.people?.map((item) => (
            <Tag key={item} icon={<LinkOutlined />} className="linkIcon">
              <Link to={`${LAYOUT[LAYOUT_ID.PEOPLE].PATH}/${id(item)}`}>
                Person {id(item)}{' '}
              </Link>
            </Tag>
          ))}
        </Descriptions.Item>
        <Descriptions.Item label="Films">
          {item.films?.map((item) => (
            <Tag key={item} icon={<LinkOutlined />} className="linkIcon">
              <Link to={`${LAYOUT[LAYOUT_ID.FILMS].PATH}/${id(item)}`}>
                Film {id(item)}{' '}
              </Link>
            </Tag>
          ))}
        </Descriptions.Item>
      </Descriptions>
    </div>
  );
};

export default SpecieDetails;
