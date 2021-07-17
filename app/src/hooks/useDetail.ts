import { useState, useCallback } from 'react';

export type DetailType = 'add' | 'update';

export interface State<T> {
  visible: boolean;
  data?: T;
  isUpdate?: boolean;
}

const useDetail = <T>(initialState?: T) => {
  const [state, setState] = useState<State<T>>({
    visible: false,
    isUpdate: false,
    data: initialState,
  });

  const show = useCallback(
    (data?: T, type: DetailType = 'add') => {
      setState({ visible: true, data, isUpdate: type === 'update' });
    },
    [setState],
  );

  const hide = useCallback(() => {
    setState({
      visible: false,
      isUpdate: false,
      data: initialState,
    });
  }, [setState]);

  return [state, setState, { show, hide }] as const;
};

export default useDetail;