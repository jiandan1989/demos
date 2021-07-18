import { defineConfig } from 'umi';
import routes from './routes'

export default defineConfig({
  layout: {
    /** 标题 */
    name: '测试',
    /** 开启国际化 */
    locale: true,
    hideMenu: true,
    /** 主题 */
    theme: 'pro',
  },
  history: {
    type: 'hash',
  },
  nodeModulesTransform: {
    type: 'none',
  },
  routes,
});
