import type React from 'react';

import { Card } from 'antd';
import { Link } from 'react-router-dom';

import { categoriesImg } from '@constants/images';

const Caregories: React.FC = () => {
  const { Meta } = Card;

  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        maxWidth: 1000,
      }}
    >
      {categoriesImg.map((item) => (
        <Link style={{ margin: 15 }} key={item.id} to={item.path}>
          <Card
            id={item.id}
            hoverable
            style={{ width: 300 }}
            cover={
              <img alt={item.name} src={item.imgUrl} style={{ height: 270 }} />
            }
          >
            <Meta title={item.name} />
          </Card>
        </Link>
      ))}
    </div>
  );
};

export default Caregories;
