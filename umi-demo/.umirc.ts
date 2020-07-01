import { defineConfig } from 'umi';

export default defineConfig({
  layout: {
    /** 标题 */
    name: '测试',
    /** 开启国际化 */
    locale: true,
    hideMenu: true,
    /** 主题 */
    theme: 'pro',
  },
  history: {
    type: 'hash',
  },
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    {
      path: '/',
      redirect: '/welcome',
    },
    {
      path: '/welcome',
      component: '@/pages/welcome',
      menu: {
        name: '欢迎',
        icon: 'home',
      },
    },
    {
      path: '/chart',
      component: '@/pages/charts/SwitchChart',
      menu: {
        name: '图表',
        icon: 'BarChart',
        // flatMenu: true
      },
    },
  ],
});
