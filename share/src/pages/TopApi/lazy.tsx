import React, { Suspense } from 'react';
import { Spin } from 'antd';

const LazyComponent = React.lazy(() => import('./OtherComponent'));

export default () => {
  return (
    <Suspense fallback={<Spin spinning />}>
      <LazyComponent />
    </Suspense>
  );
};
