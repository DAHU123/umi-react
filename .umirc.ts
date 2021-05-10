import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  base: '/docs/',
  publicPath: '/static/',
  hash: true,
  history: {
    type: 'hash',
  },
  antd: {},
  // routes: [{ path: '/', component: '@/pages/index' }], // 采用约定式路由
  fastRefresh: {},
});
