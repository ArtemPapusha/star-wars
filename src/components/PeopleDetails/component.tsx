import { LinkOutlined } from '@ant-design/icons';
import { Descriptions, Tag } from 'antd';
import { Link } from 'react-router-dom';

import { ROUTE_ID, ROUTES } from '@constants/routes';
import type { PersonType } from '@pages/PeopleList/types';

import styles from './styles.module.scss';
import '@assets/styles/components/category_link.scss';

const PeopleDetails: React.FC<{
  item: PersonType | null;
}> = ({ item }) => {
  const id = (item: string) =>
    item?.split('/')[item?.split('/').length - 1] || '';

  if (!item) return null;

  return (
    <div className={styles['detail_wrapper']}>
      <Descriptions
        contentStyle={{ maxWidth: 400 }}
        title={item.result.properties.name}
        style={{ margin: 10 }}
        bordered
        column={1}
      >
        <Descriptions.Item label="Height">
          {item.result.properties.height}
        </Descriptions.Item>

        <Descriptions.Item label="Mass">
          {item.result.properties.mass}
        </Descriptions.Item>

        <Descriptions.Item label="Eye color">
          {item.result.properties.eye_color}
        </Descriptions.Item>

        <Descriptions.Item label="Skin color">
          {item.result.properties.skin_color}
        </Descriptions.Item>

        <Descriptions.Item label="Birth year">
          {item.result.properties.birth_year}
        </Descriptions.Item>

        <Descriptions.Item label="Gender">
          {item.result.properties.gender}
        </Descriptions.Item>
        {item.result.properties.homeworld?.length !== 0 && (
          <Descriptions.Item label="Homeworld">
            <Tag icon={<LinkOutlined />}>
              <Link
                to={`${ROUTES[ROUTE_ID.PLANETS].PATH}/${id(item.result.properties.homeworld)}`}
              >
                Planet {id(item.result.properties.homeworld)}
              </Link>
            </Tag>
          </Descriptions.Item>
        )}
      </Descriptions>
    </div>
  );
};

export default PeopleDetails;
