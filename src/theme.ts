import type { ThemeConfig } from 'antd';

const theme: ThemeConfig = {
  token: {
    colorPrimary: '#4096bb',
    colorSplit: '#fff',
    fontSize: 16,
  },
  components: {
    Layout: {
      headerHeight: 50,
      headerBg: '#414040',
      bodyBg: '#0C0C0C',
      footerBg: '#414040',
    },
    Card: {
      extraColor: '#fff',
      headerBg: 'rgba(65,64,64, 0.5)',
    },
    Breadcrumb: {
      itemColor: '#fff',
      linkColor: '#fff',
      lastItemColor: '#fff',
      separatorColor: '#fff',
      linkHoverColor: '#D0CCCC',
    },
    Pagination: {},
    Descriptions: {
      contentColor: '#fff',
      extraColor: '#fff',
      titleColor: '#fff',
      labelBg: '#fff',
    },
    Spin: {
      dotSizeLG: 92,
    },
  },
};

export default theme;
