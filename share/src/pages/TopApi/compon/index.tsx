import { useState } from 'react';
import { Card, Button } from 'antd';
import Noraml from './normal';
import Pure from './pure';

export default () => {
  const [state, setState] = useState(1);

  return (
    <Card
      title={
        <Button
          onClick={() => {
            setState((prev) => prev + 1);
          }}
        >
          Click
        </Button>
      }
    >
      <Noraml />
      <Pure />
    </Card>
  );
};
