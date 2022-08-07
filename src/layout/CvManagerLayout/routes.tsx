import React from 'react';

import { Props as IconProps } from 'assets/icon/sidebar/sidebar-activity-log';
import IconSidebarDashboard from 'assets/icon/sidebar/sidebar-dashboard';
import IconSidebarInventory from 'assets/icon/sidebar/sidebar-inventory';

import { appRoutesEnum } from '../../enums/routes';

const routes: {
  path: appRoutesEnum;
  label: string;
  icon: (props: IconProps) => React.ReactElement;
}[] = [
    {
      path: appRoutesEnum.CV_MANAGER,
      label: 'Danh Sách Ứng Viên',
      icon: (props: IconProps) => <IconSidebarDashboard {...props} />,
    },
    {
      path: appRoutesEnum.PROFILE,
      label: 'Quản Lý Tài Khoản',
      icon: (props: IconProps) => <IconSidebarInventory {...props} />,
    },
  ];
export default routes;
