import { queryTableListService } from '../services/table';

export default {
  namespace: 'table',
  state: {
    list: [], // 初始值
  },
  effects: {
    *queryTableData({ payload }, { call, put }) {
      const data = yield call(queryTableListService, payload);
      if (data.success) {
        yield put({
          type: 'updateState',
          payload: {
            list: data.data.list,
          },
        });
      }
    },
  },
  reducers: {
    updateState(state, { payload }) {
      // console.log(state, '>>>>', payload);
      return { ...state, list: payload.list };
    },
  },
};
