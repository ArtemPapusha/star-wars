import { LinkOutlined } from '@ant-design/icons';
import { Descriptions, Tag } from 'antd';
import { Link } from 'react-router-dom';

import { LAYOUT, LAYOUT_ID } from '@constants/routes';
import type { VehicleType } from '@pages/VehicleList/types';

import '@assets/styles/components/category_link.scss';

const VehicleDetails: React.FC<{
  item: Omit<VehicleType, 'url'>;
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
        <Descriptions.Item label="Vehicle class">
          {item.vehicle_class}
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

export default VehicleDetails;
