
import { Settings as ProSettings } from '@ant-design/pro-layout';
type DefaultSettings = Partial<ProSettings> & {
  pwa: boolean;
};

const proSettings: DefaultSettings = {
  navTheme: 'dark',
  primaryColor: '#1890ff',
  layout: 'side',
  contentWidth: 'Fluid',
  fixedHeader: false,
  fixSiderbar: true,
  colorWeak: false,
  title: 'React 常用操作',
  pwa: false,
  iconfontUrl: '',
};

export default proSettings;