import React, { useMemo, FC } from 'react';
import { Geom, View, Axis, Chart, Tooltip, Coord, Legend } from 'bizcharts';
import ErrorBoundary from '@/components/ErrorBoundary';
import { ganttData, lineData } from './_mock';
import {
  getChartDataByRangeAndLevel,
  getTaskLevelByValue,
  getLastDataWithColors,
  getMaxYValue,
  getLastScale,
} from './helper';

export interface GanttChartProps {
  showLine: boolean;
}

const GanttChart: FC<GanttChartProps> = props => {
  const baseData = useMemo(() => getChartDataByRangeAndLevel(ganttData), [
    ganttData,
  ]);
  const { arr, colors } = useMemo(() => getLastDataWithColors(baseData), [
    baseData,
  ]);

  /** 数据最大值 */
  const maxValue = useMemo(() => getMaxYValue(ganttData), [ganttData]);
  const lastScale = useMemo(() => getLastScale(maxValue), [maxValue]);

  return (
    <ErrorBoundary>
      <Chart height={300} forceFit>
        <Tooltip shared />
        <Legend name="level" position="top-left" offsetX={20} offsetY={20} />
        <View data={arr} scale={lastScale}>
          <Coord transpose />
          <Axis name="value" />
          <Axis name="level" />
          <Axis
            name="timeRange"
            visible={false}
            line={{
              style: {
                fillOpacity: 0,
              },
            }}
          />
          <Geom
            type="interval"
            color={['level', colors]}
            position="value*timeRange"
            tooltip={[
              'level*value*task',
              (level, value, task) => {
                return {
                  name: task,
                  value: '2',
                };
              },
            ]}
          />
        </View>
        {/* {props.showLine && ( */}
        <View data={lineData} scale={lastScale}>
          <Axis name="num" position="right" />
          <Geom type="line" position="date*num" />
        </View>
        {/* )} */}
      </Chart>
    </ErrorBoundary>
  );
};

export default GanttChart;
