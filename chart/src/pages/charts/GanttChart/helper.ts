import { ScaleOption } from '@antv/g2/lib/interface';
import { maxBy } from 'lodash';

/** 等級顏色 */
const levelColors: Record<ChartProps.GanttLevelType, string> = {
  S: 'green',
  A: 'red',
  B: 'blue',
  C: 'yellow',
};

/** 根据返回值计算时间范围 以及补充等级 */
export const getChartDataByRangeAndLevel = (list: ChartProps.GanttData[]) =>
  list.map(item => ({
    ...item,
    timeRange: [item.startDate, item.endDate],
    level: item.level || getTaskLevelByValue(item.value),
  }));

/** 根据值获取对应的 level */
export const getTaskLevelByValue = (value: number) => {
  switch (true) {
    case value <= 100 && value > 0:
      return 'C';
    case value > 100 && value <= 200:
      return 'B';
    case value > 200 && value <= 300:
      return 'A';
    case value > 300:
      return 'S';
    default:
      return value;
  }
};

/** 根据等级进行排序 */
export const sortDataByLevel = (
  list: (ChartProps.GanttData & { level: ChartProps.GanttLevelType })[],
) => {
  const data = [...list];
  return data.sort((a, b) => a.level?.charCodeAt(0) - b.level?.charCodeAt(0));
};

/** 计算不同级别的数据 */
export const getAllLevelsData = (list: ChartProps.GanttData[]) => {
  return list.reduce((prev: any, next: any) => {
    // Required<ChartProps.GanttData>
    const list = prev[next.level] || [];
    prev[next.level] = list.concat(next);
    return prev;
  }, {});
};

/** 获取最终的数据格式以及指定颜色配置 */
const levelKeys = Object.keys(levelColors);
export const getLastDataWithColors = (list: ChartProps.GanttData[]) => {
  const baseChartData = getAllLevelsData(list);
  const colors: Array<string> = [];
  const arr: ChartProps.GanttData[] = [];

  levelKeys.forEach(key => {
    if (key in baseChartData && baseChartData[key].length > 0) {
      arr.push(...baseChartData[key]);
      colors.push(levelColors[key as ChartProps.GanttLevelType]);
    }
  });

  return { colors, arr };
};

/** 最终的图标配置 */
const scale: { [key: string]: ScaleOption } = {
  timeRange: {
    alias: '日期',
    type: 'time',
    mask: 'YYYY-MM-DD',
    range: [0.05, 0.95],
  },
  num: {
    min: 0,
  },
  value: {
    min: 0,
    ticks: [0, 100, 200, 300, 320],
    formatter: getTaskLevelByValue,
  },
};

const baseTicks = [0, 100, 200, 300];
const maxY = 320;
export const getLastScale = (maxValue: number = 0) => {
  const max = maxValue > maxY ? maxValue : maxY;
  const ticks = baseTicks.concat(max);
  return Object.assign({}, scale, {
    value: {
      ...scale.value,
      ticks,
    },
  });
};

/** 数据最大Y轴设置 */
export const getMaxYValue = (list: ChartProps.GanttData[]) => {
  const maxValueData = maxBy(list, o => o.value) || { value: 0 };
  return maxValueData.value;
};
