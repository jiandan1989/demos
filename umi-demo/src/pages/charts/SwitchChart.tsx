/**
 * 切换图表
 */
import React, { Fragment, useState } from 'react';
import { Chart, Geom, Axis, Tooltip, Legend } from 'bizcharts';
import { Card, Select } from 'antd';

import { switchData } from './_mock';

const SwitchChart: React.FC = () => {
  const [state, setState] = useState('');
  function handleChange(value: string) {
    setState(value);
  }
  const cols = {
    month: {
      range: [0, 1],
    },
  };

  return (
    <Card title="切换动态控制图表">
      <Select style={{ width: 120 }} onChange={handleChange}>
        <Select.Option value="声量均值">声量均值</Select.Option>
        <Select.Option value="上月同期">上月同期</Select.Option>
      </Select>
      <Chart height={400} data={switchData} scale={cols} forceFit>
        <Legend />
        <Axis name="month" />
        <Axis
          name="temperature"
          label={{
            formatter: val => `${val}°C`,
          }}
        />
        <Tooltip
          crosshairs={{
            type: 'y',
          }}
        />
        <Geom
          type="line"
          position="month*temperature"
          size={2}
          color={'city'}
          shape={'smooth'}
        />
      </Chart>
    </Card>
  );
};

export default SwitchChart;
