export default [
  {
    path: '/',
    redirect: '/welcome',
  },
  {
    path: '/welcome',
    component: '@/pages/welcome',
    hideInMenu: true,
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
    },
  },
  {
    path: '/chart/gantt',
    component: '@/pages/charts/GanttChart',
    menu: {
      name: '甘特图',
      // flatMenu: true
    },
  },
  {
    path: '/chart/bpmn',
    component: '@/pages/charts/Bpmn',
    menu: {
      name: 'BPMN',
      // flatMenu: true
    },
  },
  {
    path: '/chart/antd/doubley',
    component: '@/pages/charts/AntdChart/DoubleYChart',
    menu: {
      name: '双Y轴',
    },
  },
]