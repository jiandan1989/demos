// 基于 ahooks useSetState 改造 https://github.com/alibaba/hooks/blob/master/packages/hooks/src/useSetState/index.ts
import { useCallback, useState } from 'react';

const useSetState = <T extends object>(
  initialState: T = {} as T,
): [T, (patch: Partial<T> | ((prevState: T) => Partial<T>)) => void, () => void] => {
  const [state, setState] = useState<T>(initialState);
  const setMergeState = useCallback(
    (patch) => {
      setState((prevState) => ({
        ...prevState,
        ...(patch instanceof Function ? patch(prevState) : patch),
      }));
    },
    [setState],
  );

  const resetState = useCallback(() => {
    setMergeState(initialState);
  }, [setState]);

  return [state, setMergeState, resetState];
};

export default useSetState;