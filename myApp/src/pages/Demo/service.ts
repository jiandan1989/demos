import request from '@/utils/request';

export async function queryListService(params?: any) {
  return request('/queryList.json', {
    params,

  });
}
