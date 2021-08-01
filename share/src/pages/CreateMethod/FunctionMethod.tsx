/** 函数组件示例 */
import React, { useState } from 'react';
import { Space, Button } from 'antd';

const FunctionMethod = () => {
  const [state, setState] = useState({ count: 1 });

  const add = () => {
    setState((prevState) => ({ count: prevState.count + 1 }));
  };

  const minus = () => {
    setState((prevState) => ({ count: prevState.count - 1 }));
  };

  return (
    <Space>
      <pre>{JSON.stringify(state, null, 2)}</pre>
      <Button onClick={add}>+</Button>
      <Button onClick={minus}>-</Button>
    </Space>
  );
};

export default FunctionMethod;
