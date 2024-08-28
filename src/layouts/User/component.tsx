import type React from 'react';

import { Layout } from 'antd';
import { Outlet } from 'react-router-dom';

const { Header, Content, Footer } = Layout;

import Breadcrumb from '@components/Breadcrumb/component';

import style from './style.module.scss';

const User: React.FC = () => {

  return (
    <Layout>
      <Header style={{ borderRadius: 5 }} />

      <Content style={{ padding: '0 48px' }}>
        <div className={style.contentWrapper}>
          <Breadcrumb />
          <div className={style.outletContentWrapper}>
            <Outlet />
          </div>
        </div>
      </Content>

      <Footer style={{ textAlign: 'center' }}>
        Star Wars ©{new Date().getFullYear()}
      </Footer>
    </Layout>
  );
};

export default User;
