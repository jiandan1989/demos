import request from '@/utils/request';
import { stringify } from 'qs';

/** 列表 */
export function queryListService(params?: any) {
  return request(`/queryList.json?${stringify(params)}`);
}

/** 删除 */
export function delDemoService(params: { id: string }) {
  return request('/deleteDemo.json', {
    method: 'POST',
    data: params,
    requestType: 'form'
  })
}

/** 新增 */
export function addDemoService(params: any) {
  return request('/addDemo.json', {
    method: 'POST',
    data: params,
    requestType: 'form'
  })
}

/** 更新 */
export function updateDemoService(params: any) {
  return request('/updateDemo.json', {
    method: 'POST',
    data: params,
    requestType: 'form'
  })
}