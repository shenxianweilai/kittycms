import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  layout: {},
  routes: [
    { path: '/', component: '@/pages/index', redirect: '/user' },
    {
      path: '/',
      component: '@/layouts/index',
      routes: [
        {
          path: '/user',
          component: '@/pages/user/index',
          wrappers: [
            '@/wrappers/auth'
          ]
        }
      ]
    }
  ],
  mfsu: {},
  fastRefresh: {},
});
