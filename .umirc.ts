import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  layout: {},
  routes: [
    {
      path: '/',
      component: '@/pages/index',
      name: '首页',
      icon: 'crown',
      access: 'isAdmin',
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
  ],
  mfsu: {},
  fastRefresh: {},
});
