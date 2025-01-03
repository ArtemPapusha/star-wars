import { LinkOutlined } from '@ant-design/icons';
import { Descriptions, Tag } from 'antd';
import { generatePath, Link } from 'react-router-dom';

import { ROUTE_ID, ROUTES } from '@constants/routes';
import type { ResultFilmType } from '@pages/FilmList/types';

import styles from './styles.module.scss';
import '@assets/styles/components/category_link.scss';

const FilmDetails: React.FC<{
  item: ResultFilmType | null;
}> = ({ item }) => {
  const id = (item: string) =>
    item?.split('/')[item?.split('/').length - 1] || '';

  if (!item) return null;

  return (
    <div className={styles['detail_wrapper']}>
      <Descriptions
        title={item.properties.title}
        style={{ margin: 10 }}
        bordered
        column={1}
      >
        <Descriptions.Item label="Episode">
          {item.properties.episode_id}
        </Descriptions.Item>
        <Descriptions.Item label="Opening crawl">
          {item.properties.opening_crawl}
        </Descriptions.Item>
        <Descriptions.Item label="Director">
          {item.properties.director}
        </Descriptions.Item>
        <Descriptions.Item label="Producer">
          {item.properties.producer}
        </Descriptions.Item>
        <Descriptions.Item label="Release date">
          {item.properties.release_date}
        </Descriptions.Item>
        {item.properties.characters?.length !== 0 && (
          <Descriptions.Item label="Characters">
            {item.properties.characters?.map((item) => (
              <Tag key={item} icon={<LinkOutlined />} className="linkIcon">
                <Link
                  to={generatePath(ROUTES[ROUTE_ID.PEOPLE_DETAILS].PATH, {
                    id: id(item),
                  })}
                >
                  Person {id(item)}
                </Link>
              </Tag>
            ))}
          </Descriptions.Item>
        )}
        {item.properties.planets?.length !== 0 && (
          <Descriptions.Item label="Planets">
            {item.properties.planets?.map((item) => (
              <Tag key={item} icon={<LinkOutlined />} className="linkIcon">
                <Link
                  to={generatePath(ROUTES[ROUTE_ID.PLANETS_DETAIL].PATH, {
                    id: id(item),
                  })}
                >
                  Planet {id(item)}
                </Link>
              </Tag>
            ))}
          </Descriptions.Item>
        )}
        {item.properties.starships?.length !== 0 && (
          <Descriptions.Item label="Starships">
            {item.properties.starships?.map((item) => (
              <Tag key={item} icon={<LinkOutlined />} className="linkIcon">
                <Link
                  to={generatePath(ROUTES[ROUTE_ID.STARSHIPS_DETAIL].PATH, {
                    id: id(item),
                  })}
                >
                  Starship {id(item)}
                </Link>
              </Tag>
            ))}
          </Descriptions.Item>
        )}
        {item.properties.vehicles?.length !== 0 && (
          <Descriptions.Item label="Vehicles">
            {item.properties.vehicles?.map((item) => (
              <Tag key={item} icon={<LinkOutlined />} className="linkIcon">
                <Link
                  to={generatePath(ROUTES[ROUTE_ID.VEHICLES_DETAIL].PATH, {
                    id: id(item),
                  })}
                >
                  Vehicle {id(item)}
                </Link>
              </Tag>
            ))}
          </Descriptions.Item>
        )}
        {item.properties.species?.length !== 0 && (
          <Descriptions.Item label="Species">
            {item.properties.species?.map((item) => (
              <Tag key={item} icon={<LinkOutlined />} className="linkIcon">
                <Link
                  to={generatePath(ROUTES[ROUTE_ID.SPECIES_DETAIL].PATH, {
                    id: id(item),
                  })}
                >
                  Specie {id(item)}
                </Link>
              </Tag>
            ))}
          </Descriptions.Item>
        )}
      </Descriptions>
    </div>
  );
};

export default FilmDetails;
