import React from 'react';

import { ConfigProvider } from 'antd';
import { IntlProvider } from 'react-intl';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';

import messages_en from '@locale/en'
import router from '@routes';
import store from '@store';
import theme from '@theme';


const App: React.FC = () => {

  return (
    <React.StrictMode>
      <Provider store={store}>
        <IntlProvider {...messages_en}>
          <ConfigProvider theme={theme}>
            <RouterProvider router={router} />
          </ConfigProvider>
        </IntlProvider>
      </Provider>
    </React.StrictMode>
  );
};

export default App;
