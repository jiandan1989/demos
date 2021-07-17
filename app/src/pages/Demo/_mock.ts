import { Random } from 'mockjs';

const list = Array(100)
  .fill(1)
  .map(() => ({
    id: Random.id(),
    userName: Random.cname(),
    address: Random.city(),
    email: Random.email(),
  }));

const apis = ['POST /deleteDemo.json', 'POST /updateDemo.json'];

const servicesMock = apis.reduce((prev, next) => {
  const prevData = { ...prev };
  prevData[next] = {
    success: true,
    data: {
      success: true,
    }
  }
  return prevData;
}, {});

export default {
  'GET /queryList.json': {
    success: true,
    data: {
      list,
      total: list.length,
    },
  },
  'POST /addDemo.json': {
    success: true,
    data: true,
  },
  ...servicesMock,
};
