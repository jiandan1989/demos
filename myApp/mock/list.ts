import { Random } from 'mockjs';

const list = Array(100)
  .fill(1)
  .map(() => ({
    a: Random.cname(),
    b: Random.city(),
    c: Random.name(),
  }));

export default {
  'GET /queryList.json': {
    success: true,
    data: {
      list,
      total: list.length,
    },
  },
};
