import type React from 'react';

import { Pagination, Spin } from 'antd';

import PeopleDescription from '@components/PeopleDescription';

import useContainer from './hook';

import '@assets/styles/components/pagination.scss';
import '@assets/styles/components/description.scss';

const PeopleList: React.FC = () => {
  const { items, onChange, currentPage, totalItems, loader } = useContainer();
  return (
    <>
      {loader ? (
        <Spin size="large" />
      ) : (
        <>
          <div className="description">
            {items.map((item) => (
              <PeopleDescription key={item.name} item={item} />
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

export default PeopleList;
