import request from '@/utils/request';

export async function queryTableListService(params: any) {
  return request('/queryList.json', {
    params,
  });
}