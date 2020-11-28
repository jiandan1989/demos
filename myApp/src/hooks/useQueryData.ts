/**
 * 1. queryService: 封装的请求方法
 * 2. defaultData: 默认值
 */

import { useMemo } from 'react';
import { useRequest } from 'umi';

type Result<T> = {
  data: {
    data: T;
    success: boolean;
  };
};

/** 默认值 */
const useQueryData = <T = any>(queryService: Function, defaultData: T[] = []) => {
  const { data, run, loading } = useRequest<T>(queryService, {
    manual: true,
    initialData: defaultData as any,
  });

  const result = useMemo(() => {
    return data || defaultData;
  }, [data]);

  return [result, run, loading] as const;
};

export default useQueryData;
