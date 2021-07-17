import { useMemo } from 'react';
import { useRequest } from 'ahooks';

export type FieldType = 'result' | 'data' | string;
const getType = (value: any) => Object.prototype.toString.call(value);

export default <T = any, Q extends object = any>(
  queryService: (args?: Q) => Promise<T>,
  defaultData: T = { list: [], total: 0 } as unknown as T,
  fieldType: FieldType = 'data',
) => {
  const { data, params, loading, run } = useRequest<T>(
    (queryParams: any) => queryService(queryParams),
    {
      manual: true,
    },
  );

  const defaultDataType = useMemo(() => getType(defaultData), [defaultData]);
  const result = useMemo(() => {
    if (data && (data as any).success && data[fieldType]) {
      return defaultDataType === getType(data[fieldType])
        ? data[fieldType] as T
        : defaultData;
    }
    return defaultData as T;
  }, [data]);

  return [result, run, loading, { params }] as const;
};