import { Descriptions, Divider } from 'antd';

import type { PlanetType } from '@pages/PlanetList/types';

import styles from './styles.module.scss';
import '@assets/styles/components/category_link.scss';

const PlanetDetails: React.FC<{
  item: PlanetType | null;
}> = ({ item }) => {
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
        <Descriptions.Item label="Rotation period">
          {item.result.properties.rotation_period}
        </Descriptions.Item>
        <Descriptions.Item label="Orbital period">
          {item.result.properties.orbital_period}
        </Descriptions.Item>
        <Descriptions.Item label="Diameter">
          {item.result.properties.diameter}
        </Descriptions.Item>
        <Descriptions.Item label="Climate">
          {item.result.properties.climate}
        </Descriptions.Item>
        <Descriptions.Item label="Gravity">
          {item.result.properties.gravity}
        </Descriptions.Item>
        <Descriptions.Item label="Terrain">
          {item.result.properties.terrain}
        </Descriptions.Item>
        <Descriptions.Item label="Surface water">
          {item.result.properties.surface_water}
        </Descriptions.Item>
        <Descriptions.Item label="Population">
          {item.result.properties.population}
        </Descriptions.Item>
      </Descriptions>
      <Divider />
    </div>
  );
};

export default PlanetDetails;
