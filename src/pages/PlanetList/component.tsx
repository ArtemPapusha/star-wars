import type React from 'react';

import { Pagination, Spin } from 'antd';

import PlanetsDescription from '@components/PlanetsDescription';

import useContainer from './hook';

import '@assets/styles/components/pagination.scss';
import '@assets/styles/components/description.scss';

const PlanetList: React.FC = () => {
  const { items, onChange, currentPage, totalItems, loader } = useContainer();

  return (
    <>
      {loader ? (
        <Spin size="large" />
      ) : (
        <>
          <div className="description">
            {items.map((item) => (
              <PlanetsDescription key={item.name} item={item} />
            ))}
          </div>

          {totalItems !== undefined && totalItems > 10 && (
            <Pagination
              className="pagination"
              current={currentPage}
              total={totalItems}
              onChange={onChange}
              defaultPageSize={10}
              showSizeChanger={false}
            />
          )}
        </>
      )}
    </>
  );
};

export default PlanetList;
