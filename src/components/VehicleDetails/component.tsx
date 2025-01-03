import { LinkOutlined } from '@ant-design/icons';
import { Descriptions, Tag } from 'antd';
import { Link } from 'react-router-dom';

import { ROUTE_ID, ROUTES } from '@constants/routes';
import type { VehicleType } from '@pages/VehicleList/types';

import styles from './styles.module.scss';
import '@assets/styles/components/category_link.scss';

const VehicleDetails: React.FC<{
  item: VehicleType | null;
}> = ({ item }) => {
  const id = (item: string) =>
    item?.split('/')[item?.split('/').length - 1] || '';

  return (
    <div className={styles['detail_wrapper']}>
      <Descriptions
        title={item?.result.properties.name}
        style={{ margin: 10 }}
        bordered
        column={1}
      >
        <Descriptions.Item label="Model">
          {item?.result.properties.model}
        </Descriptions.Item>
        <Descriptions.Item label="Manufacturer">
          {item?.result.properties.manufacturer}
        </Descriptions.Item>
        <Descriptions.Item label="Cost in credits">
          {item?.result.properties.cost_in_credits}
        </Descriptions.Item>
        <Descriptions.Item label="Length">
          {item?.result.properties.length}
        </Descriptions.Item>
        <Descriptions.Item label="Max atmosphering speed">
          {item?.result.properties.max_atmosphering_speed}
        </Descriptions.Item>
        <Descriptions.Item label="Crew">
          {item?.result.properties.crew}
        </Descriptions.Item>
        <Descriptions.Item label="Passengers">
          {item?.result.properties.passengers}
        </Descriptions.Item>
        <Descriptions.Item label="Cargo capacity">
          {item?.result.properties.cargo_capacity}
        </Descriptions.Item>
        <Descriptions.Item label="Consumables">
          {item?.result.properties.consumables}
        </Descriptions.Item>
        <Descriptions.Item label="Vehicle class">
          {item?.result.properties.vehicle_class}
        </Descriptions.Item>
        {item?.result.properties.pilots.length !== 0 && (
          <Descriptions.Item label="Pilots">
            {item?.result.properties.pilots?.map((item) => (
              <Tag key={item} icon={<LinkOutlined />} className="linkIcon">
                <Link to={`${ROUTES[ROUTE_ID.PEOPLE].PATH}/${id(item)}`}>
                  Pilot {id(item)}{' '}
                </Link>
              </Tag>
            ))}
          </Descriptions.Item>
        )}
        {item?.result.properties.films.length !== 0 && (
          <Descriptions.Item label="Films">
            {item?.result.properties.films?.map((item) => (
              <Tag key={item} icon={<LinkOutlined />} className="linkIcon">
                <Link to={`${ROUTES[ROUTE_ID.FILMS].PATH}/${id(item)}`}>
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

export default VehicleDetails;
