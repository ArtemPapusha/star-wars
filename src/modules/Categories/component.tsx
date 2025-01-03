import type React from 'react';

import { Card, Skeleton } from 'antd';
import { Link } from 'react-router-dom';

import useContainer from './hook';
import styles from './styles.module.scss';

const Caregories: React.FC = () => {
  const { loadingStates, categoriesImg, handleImageLoad } = useContainer();

  return (
    <div className={styles['categories-wrapper']}>
      {categoriesImg.map((item, index) => (
        <Link className={styles['card-wrapper']} key={item.id} to={item.path}>
          <Card
            id={item.id}
            hoverable
            className={styles['ant-card']}
            cover={
              <>
                {loadingStates[index] && (
                  <Skeleton.Image
                    active
                    style={{
                      width: '100%',
                      height: 270,
                    }}
                  />
                )}
                <img
                  alt={item.name}
                  src={item.imgUrl}
                  style={{
                    display: loadingStates[index] ? 'none' : 'block',
                  }}
                  className={styles['card-image']}
                  onLoad={() => handleImageLoad(index)}
                />
              </>
            }
          >
            <Card.Meta title={item.name} />
          </Card>
        </Link>
      ))}
    </div>
  );
};

export default Caregories;
