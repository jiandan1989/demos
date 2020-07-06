import React, { Fragment, useState, useMemo } from 'react';
import { Card, Select } from 'antd';
import GanttChart from './Chart';

const GanttChartView = () => {
  const [value, setValue] = useState('all');

  const showLine = useMemo(() => value === 'not', [value]);

  return (
    <Card
      title="甘特图"
      extra={
        <Fragment>
          <span>选择: </span>
          <Select
            style={{ width: 100 }}
            value={value}
            onChange={val => {
              setValue(val);
            }}
          >
            <Select.Option value="all">全部</Select.Option>
            <Select.Option value="not">非全部</Select.Option>
          </Select>
        </Fragment>
      }
    >
      <GanttChart showLine={showLine} />
    </Card>
  );
};

export default GanttChartView;
