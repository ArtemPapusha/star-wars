import { LinkOutlined } from '@ant-design/icons';
import { Descriptions, Tag } from 'antd';
import { Link } from 'react-router-dom';

import { ROUTE_ID, ROUTES } from '@constants/routes';
import type { SpecieType } from '@pages/SpecieList/types';

import styles from './styles.module.scss';
import '@assets/styles/components/category_link.scss';

const SpecieDetails: React.FC<{
  item: SpecieType | null;
}> = ({ item }) => {
  const id = (item: string) =>
    item?.split('/')[item?.split('/').length - 1] || '';

  if (!item) return null;

  return (
    <div className={styles['detail_wrapper']}>
      <Descriptions
        title={item.result.properties.name}
        style={{ margin: 10 }}
        bordered
        column={1}
      >
        <Descriptions.Item label="Classification">
          {item.result.properties.classification}
        </Descriptions.Item>
        <Descriptions.Item label="designation">
          {item.result.properties.designation}
        </Descriptions.Item>
        <Descriptions.Item label="Average height">
          {item.result.properties.average_height}
        </Descriptions.Item>
        <Descriptions.Item label="Skin colors">
          {item.result.properties.skin_colors}
        </Descriptions.Item>
        <Descriptions.Item label="Hair colors">
          {item.result.properties.hair_colors}
        </Descriptions.Item>
        <Descriptions.Item label="Eye colors">
          {item.result.properties.eye_colors}
        </Descriptions.Item>
        <Descriptions.Item label="Average lifespan">
          {item.result.properties.average_lifespan}
        </Descriptions.Item>
        <Descriptions.Item label="Homeworld">
          <Tag icon={<LinkOutlined />}>
            <Link
              to={`${ROUTES[ROUTE_ID.PLANETS].PATH}/${id(item.result.properties.homeworld)}`}
            >
              Homeworld {id(item.result.properties.homeworld)}
            </Link>
          </Tag>
        </Descriptions.Item>
        <Descriptions.Item label="language">
          {item.result.properties.language}
        </Descriptions.Item>
        <Descriptions.Item label="People">
          {item.result.properties.people?.map((item) => (
            <Tag key={item} icon={<LinkOutlined />} className="linkIcon">
              <Link to={`${ROUTES[ROUTE_ID.PEOPLE].PATH}/${id(item)}`}>
                Person {id(item)}{' '}
              </Link>
            </Tag>
          ))}
        </Descriptions.Item>
      </Descriptions>
    </div>
  );
};

export default SpecieDetails;
