import { LinkOutlined } from '@ant-design/icons';
import { Descriptions, Tag } from 'antd';
import { Link } from 'react-router-dom';

import { LAYOUT, LAYOUT_ID } from '@constants/routes';
import type { StarshipType } from '@pages/StarshipList/types';

import '@assets/styles/components/category_link.scss';

const StarshipDetail: React.FC<{
  item: Pick<
    StarshipType,
    | 'model'
    | 'name'
    | 'manufacturer'
    | 'cost_in_credits'
    | 'length'
    | 'max_atmosphering_speed'
    | 'crew'
    | 'passengers'
    | 'cargo_capacity'
    | 'consumables'
    | 'hyperdrive_rating'
    | 'MGLT'
    | 'starship_class'
    | 'pilots'
    | 'films'
  >;
}> = ({ item }) => {
  const id = (item: string) =>
    item?.split('/')[item?.split('/').length - 2] || '';

  return (
    <div key={item.name}>
      <Descriptions title={item.name} style={{ margin: 10 }} bordered>
        <Descriptions.Item label="Model">{item.model}</Descriptions.Item>
        <Descriptions.Item label="Manufacturer">
          {item.manufacturer}
        </Descriptions.Item>
        <Descriptions.Item label="Cost in credits">
          {item.cost_in_credits}
        </Descriptions.Item>
        <Descriptions.Item label="Length">{item.length}</Descriptions.Item>
        <Descriptions.Item label="Max atmosphering speed">
          {item.max_atmosphering_speed}
        </Descriptions.Item>
        <Descriptions.Item label="Crew">{item.crew}</Descriptions.Item>
        <Descriptions.Item label="Passengers">
          {item.passengers}
        </Descriptions.Item>
        <Descriptions.Item label="Cargo capacity">
          {item.cargo_capacity}
        </Descriptions.Item>
        <Descriptions.Item label="Consumables">
          {item.consumables}
        </Descriptions.Item>
        <Descriptions.Item label="Hyperdrive rating">
          {item.hyperdrive_rating}
        </Descriptions.Item>
        <Descriptions.Item label="MGLT">{item.MGLT}</Descriptions.Item>
        <Descriptions.Item label="Starship class">
          {item.starship_class}
        </Descriptions.Item>
        {item.pilots.length > 0 && (
          <Descriptions.Item label="Pilots">
            {item.pilots?.map((item) => (
              <Tag key={item} icon={<LinkOutlined />} className="linkIcon">
                <Link to={`${LAYOUT[LAYOUT_ID.PEOPLE].PATH}/${id(item)}`}>
                  Pilot {id(item)}{' '}
                </Link>
              </Tag>
            ))}
          </Descriptions.Item>
        )}
        {item.films.length > 0 && (
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
      </Descriptions>
    </div>
  );
};

export default StarshipDetail;
