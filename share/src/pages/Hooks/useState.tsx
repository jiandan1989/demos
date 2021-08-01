import { Fragment, useState } from 'react';
import { Button } from 'antd';

export default () => {
  const [state, setState] = useState(1);

  console.log('>>>>>>>>');
  return (
    <Fragment>
      <pre>{JSON.stringify(state, null, 2)}</pre>
      <Button
        onClick={() => {
          setState(state + 1);
        }}
      >
        Click
      </Button>
    </Fragment>
  );
};
