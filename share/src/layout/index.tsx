import ProLayout from '@ant-design/pro-layout';
import React from 'react';
import { useIntl, Link, useHistory } from 'umi';
import settings from '@/setting';

const Layout = (props: { children: any }) => {
  const history = useHistory();
  const { children } = props;
  const { formatMessage } = useIntl();

  return (
    <ProLayout
      formatMessage={formatMessage}
      {...props}
      {...settings}
      onMenuHeaderClick={() => history.push('/')}
      menuItemRender={(menuItemProps, defaultDom) => {
        if (
          menuItemProps.isUrl ||
          !menuItemProps.path ||
          location.pathname === menuItemProps.path
        ) {
          return defaultDom;
        }
        return <Link to={menuItemProps.path}>{defaultDom}</Link>;
      }}
    >
      {children}
    </ProLayout>
  );
};

export default Layout;
