import { defineConfig } from 'umi';

export default defineConfig({
  history: {
    type: 'hash',
  },
  nodeModulesTransform: {
    type: 'none',
  },
  locale: {
    default: 'zh-CN',
    antd: true,
    baseNavigator: true,
  },
  routes: [
    {
      path: '/',
      component: '../layout',
      routes: [
        {
          path: '/',
          redirect: '/welcome',
        },
        {
          path: '/welcome',
          name: 'welcome',
          icon: 'smile',
          hideInMenu: true,
          component: './Welcome',
        },
        {
          path: '/create',
          name: 'create',
          routes: [{
            path: 'class',
            name: 'class',
            component: '@/pages/CreateMethod/ClassMethod',
          }, {
            path: 'function',
            name: 'function',
            component: '@/pages/CreateMethod/FunctionMethod'
          }]
        },
        {
          path: '/hooks',
          name: 'hooks',
          routes: [
            {
              path: 'useState',
              name: 'useState',
              component: '@/pages/Hooks/useState',
            },
            {
              path: 'useEffect',
              name: 'useEffect',
              component: '@/pages/Hooks/useEffect',
            },
            {
              path: 'useReducer',
              name: 'useReducer',
              component: '@/pages/Hooks/useReducer',
            },
          ],
        },
        {
          path: 'apis',
          name: 'apis',
          routes: [{
            path: 'component',
            name: 'component',
            component: '@/pages/TopApi/compon'
          }, {
            path: 'lazy',
            name: 'lazy',
            component: '@/pages/TopApi/lazy'
          }]
        }
      ],
    },
  ],
  fastRefresh: {},
});
