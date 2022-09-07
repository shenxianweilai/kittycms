import { defineConfig } from 'umi';
import {
  ChromeFilled,
  CrownFilled,
  SmileFilled,
  TabletFilled,
} from '@ant-design/icons';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  dva: {},
  layout: {
    navTheme: 'dark',
    primaryColor: '#1890ff',
    layout: 'sidemenu',
    contentWidth: 'Fluid',
    title: 'CATS SHOP CMS',
    pwa: false,
    iconfontUrl: '',
  },
  routes: [
    {
      path: '/',
      component: '@/pages/index',
      name: '首页',
      icon: 'Crown',
      access: 'isAdmin',
    },
    {
      path: '/login',
      component: '@/pages/login/index',
      layout: false,
    },
    {
      path: '/user',
      component: '@/layouts/index',
      name: '用户',
      access: 'isAdmin',
      routes: [
        {
          path: 'all',
          name: '用户首页',
          component: '@/pages/user/index',
          access: 'isAdmin',
          wrappers: ['@/wrappers/auth'],
        },
      ],
    },
    {
      path: '/goods',
      component: '@/layouts/index',
      name: '商品',
      access: 'isAdmin',
      routes: [
        {
          path: 'all',
          name: '商品首页',
          component: '@/pages/goods/index',
          access: 'isAdmin',
          wrappers: ['@/wrappers/auth'],
        },
      ],
    },
  ],
  mfsu: {},
  fastRefresh: {},
});
