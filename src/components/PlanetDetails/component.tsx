import { LinkOutlined } from '@ant-design/icons';
import { Descriptions, Divider, Tag } from 'antd';
import { Link } from 'react-router-dom';

import { LAYOUT, LAYOUT_ID } from '@constants/routes';
import type { PlanetType } from '@pages/PlanetList/types';

import '@assets/styles/components/category_link.scss';

const PlanetDetails: React.FC<{
  item: Omit<PlanetType, 'url'>;
}> = ({ item }) => {
  const id = (item: string) =>
    item?.split('/')[item?.split('/').length - 2] || '';

  return (
    <div style={{ backgroundColor: 'rgba(65,64,64, 0.5)', padding: 10 }}>
      <Descriptions
        contentStyle={{ maxWidth: 400 }}
        title={item.name}
        style={{ margin: 10 }}
        bordered
      >
        <Descriptions.Item label="Rotation period">
          {item.rotation_period}
        </Descriptions.Item>
        <Descriptions.Item label="Orbital period">
          {item.orbital_period}
        </Descriptions.Item>
        <Descriptions.Item label="Diameter">{item.diameter}</Descriptions.Item>
        <Descriptions.Item label="Climate">{item.climate}</Descriptions.Item>
        <Descriptions.Item label="Gravity">{item.gravity}</Descriptions.Item>
        <Descriptions.Item label="Terrain">{item.terrain}</Descriptions.Item>
        <Descriptions.Item label="Surface water">
          {item.surface_water}
        </Descriptions.Item>
        <Descriptions.Item label="Population">
          {item.population}
        </Descriptions.Item>
        {item.residents?.length !== 0 && (
          <Descriptions.Item label="Residents">
            {item.residents?.map((item) => (
              <Tag key={item} icon={<LinkOutlined />} className="linkIcon">
                <Link to={`${LAYOUT[LAYOUT_ID.PEOPLE].PATH}/${id(item)}`}>
                  People {id(item)}{' '}
                </Link>
              </Tag>
            ))}
          </Descriptions.Item>
        )}
        {item.films?.length !== 0 && (
          <Descriptions.Item label="Films">
            {item.films?.map((item) => (
              <Tag key={item} icon={<LinkOutlined />} className="linkIcon">
                <Link to={`${LAYOUT[LAYOUT_ID.FILMS].PATH}/${id(item)}`}>
                  Films {id(item)}{' '}
                </Link>
              </Tag>
            ))}
          </Descriptions.Item>
        )}
      </Descriptions>
      <Divider />
    </div>
  );
};

export default PlanetDetails;
