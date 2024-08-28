import { LinkOutlined } from '@ant-design/icons';
import { Descriptions, Tag } from 'antd';
import { Link } from 'react-router-dom';

import { LAYOUT, LAYOUT_ID } from '@constants/routes';
import type { FilmType } from '@pages/FilmList/types';

import '@assets/styles/components/category_link.scss';

const FilmDetails: React.FC<{
  item: Omit<FilmType, 'url'>;
}> = ({ item }) => {
  const id = (item: string) =>
    item?.split('/')[item?.split('/').length - 2] || '';

  return (
    <div key={item.title}>
      <Descriptions title={item.title} style={{ margin: 10 }} bordered>
        <Descriptions.Item label="Episode">{item.episode_id}</Descriptions.Item>
        <Descriptions.Item label="Opening crawl">
          {item.opening_crawl}
        </Descriptions.Item>
        <Descriptions.Item label="Director">{item.director}</Descriptions.Item>
        <Descriptions.Item label="Producer">{item.producer}</Descriptions.Item>
        <Descriptions.Item label="Release date">
          {item.release_date}
        </Descriptions.Item>
        {item.characters?.length !== 0 && (
          <Descriptions.Item label="Characters">
            {item.characters?.map((item) => (
              <Tag key={item} icon={<LinkOutlined />} className="linkIcon">
                <Link to={`${LAYOUT[LAYOUT_ID.PEOPLE].PATH}/${id(item)}`}>
                  Person {id(item)}{' '}
                </Link>
              </Tag>
            ))}
          </Descriptions.Item>
        )}
        {item.planets?.length !== 0 && (
          <Descriptions.Item label="Planets">
            {item.planets?.map((item) => (
              <Tag key={item} icon={<LinkOutlined />} className="linkIcon">
                <Link to={`${LAYOUT[LAYOUT_ID.PLANETS].PATH}/${id(item)}`}>
                  Planet {id(item)}{' '}
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
      </Descriptions>
    </div>
  );
};

export default FilmDetails;
