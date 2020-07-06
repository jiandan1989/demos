/**
 * 甘特图使用数据: 采用的是平铺列表
 */
export const ganttData = [
  {
    value: 400,
    task: '特级项目',
    startDate: '2018-04-08',
    endDate: '2018-04-18 01:19:10',
  },
  {
    value: 200,
    task: '项目一',
    startDate: '2018-04-08',
    endDate: '2018-04-18 01:19:10',
  },
  {
    value: 120,
    task: '项目二',
    startDate: '2018-05-11 01:18:15',
    endDate: '2018-06-13 01:19:20',
  },
  {
    task: '项目三',
    value: 160,
    startDate: '2018-07-18 02:11:32',
    endDate: '2018-10-22 02:18:50',
  },
  {
    task: '项目四',
    value: 190,
    startDate: '2018-01-10 02:18:50',
    endDate: '2018-03-11 03:16:38',
  },
  {
    task: '项目五',
    value: 240,
    startDate: '2018-02-07 02:19:48',
    endDate: '2018-12-12 02:21:57',
  },
  {
    task: '项目六',
    value: 20,
    startDate: '2018-02-02 03:16:38',
    endDate: '2018-09-05 03:19:38',
  },
];

const dates = ganttData.reduce((prev: any[], next) => {
  return prev.concat(next.startDate, next.endDate);
}, []);

/**
 * 折现图数据: 普通折线图数据
 */
export const lineData = dates.map((item, index) => ({
  num: Math.pow(index + 1, 2),
  date: item,
}));
