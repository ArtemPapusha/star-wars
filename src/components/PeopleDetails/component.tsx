import { LinkOutlined } from '@ant-design/icons';
import { Descriptions, Tag } from 'antd';
import { Link } from 'react-router-dom';

import { LAYOUT, LAYOUT_ID } from '@constants/routes';
import type { PersonType } from '@pages/PeopleList/types';

import '@assets/styles/components/category_link.scss';

const PeopleDetails: React.FC<{
  item: Omit<PersonType, 'url'>;
}> = ({ item }) => {
  const id = (item: PersonType['homeworld'] | string) =>
    item?.split('/')[item?.split('/').length - 2] || '';

  return (
    <div style={{ padding: 10 }}>
      <Descriptions
        contentStyle={{ maxWidth: 400 }}
        title={item.name}
        style={{ margin: 10 }}
        bordered
      >
        <Descriptions.Item label="Height">{item.height}</Descriptions.Item>

        <Descriptions.Item label="Mass">{item.mass}</Descriptions.Item>

        <Descriptions.Item label="Eye color">
          {item.eye_color}
        </Descriptions.Item>

        <Descriptions.Item label="Skin color">
          {item.skin_color}
        </Descriptions.Item>

        <Descriptions.Item label="Birth year">
          {item.birth_year}
        </Descriptions.Item>

        <Descriptions.Item label="Gender">{item.gender}</Descriptions.Item>
        {item.homeworld?.length !== 0 && (
          <Descriptions.Item label="Homeworld">
            <Tag icon={<LinkOutlined />}>
              <Link
                to={`${LAYOUT[LAYOUT_ID.PLANETS].PATH}/${id(item.homeworld)}`}
              >
                Planet {id(item.homeworld)}
              </Link>
            </Tag>
          </Descriptions.Item>
        )}
        {item.films?.length !== 0 && (
          <Descriptions.Item label="Films">
            {item.films?.map((item) => (
              <Tag key={item} icon={<LinkOutlined />} className="linkIcon">
                <Link to={`${LAYOUT[LAYOUT_ID.FILMS].PATH}/${id(item)}`}>
                  Film {id(item)}{' '}
                </Link>
              </Tag>
            ))}
          </Descriptions.Item>
        )}
        {item.species?.length !== 0 && (
          <Descriptions.Item label="Species">
            {item.species?.map((item) => (
              <Tag key={item} icon={<LinkOutlined />} className="linkIcon">
                <Link to={`${LAYOUT[LAYOUT_ID.SPECIES].PATH}/${id(item)}`}>
                  Specie {id(item)}{' '}
                </Link>
              </Tag>
            ))}
          </Descriptions.Item>
        )}
        {item.vehicles?.length !== 0 && (
          <Descriptions.Item label="Vehicles">
            {item.vehicles?.map((item) => (
              <Tag key={item} icon={<LinkOutlined />} className="linkIcon">
                <Link to={`${LAYOUT[LAYOUT_ID.VEHICLES].PATH}/${id(item)}`}>
                  Vehicle {id(item)}{' '}
                </Link>
              </Tag>
            ))}
          </Descriptions.Item>
        )}
        {item.starships?.length !== 0 && (
          <Descriptions.Item label="Starships">
            {item.starships?.map((item) => (
              <Tag key={item} icon={<LinkOutlined />} className="linkIcon">
                <Link to={`${LAYOUT[LAYOUT_ID.STARSHIPS].PATH}/${id(item)}`}>
                  Starship {id(item)}{' '}
                </Link>
              </Tag>
            ))}
          </Descriptions.Item>
        )}
      </Descriptions>
    </div>
  );
};

export default PeopleDetails;
