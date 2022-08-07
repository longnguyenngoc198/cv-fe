import React, { PropsWithChildren, useCallback, useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import clsx from 'clsx';
import {
  Drawer,
  ListItem,
  ListItemIcon,
  ListItemText,
  Tooltip,
  Typography,
} from '@material-ui/core';

import IconSidebarVersion from 'assets/icon/sidebar/sidebar-version';
import { TaskStatus } from 'types/asyncTaskState';
import { appRoutesEnum } from '../../../enums/routes';
import validationUtils from '../../../utils/validation';
import routes from '../routes';
import { styles } from './styles';

export interface Props {
  openDrawer: boolean;
  path: string | string[];
  readVersionState?: TaskStatus;
  onNavigate: (route: appRoutesEnum) => void;
}
export default function CvManagerDrawer(props: PropsWithChildren<Props>) {
  const { openDrawer, onNavigate } = props;
  const classes = styles();

  const routeLocation = useLocation();

  const renderIcon = React.useCallback(
    ({ icon, label, isActive }: any) => {
      const Icon = icon({ isActive });
      return openDrawer ? (
        Icon
      ) : (
        <Tooltip title={label}>
          <span className={classes.iconWrapper}>{Icon}</span>
        </Tooltip>
      );
    },
    [openDrawer, classes.iconWrapper]
  );

  const onHandleNavigate = useCallback(
    (route: appRoutesEnum) => () => {
      onNavigate(route);
    },
    [onNavigate]
  );

  const appRoutes = useMemo(() => {
    return routes.map(({ label, path, icon }) => {
      const isActive = validationUtils.setActiveRoute(
        routeLocation.pathname,
        path,
        2
      );

      return (
        <ListItem
          key={label}
          selected={isActive}
          onClick={onHandleNavigate(path)}
          data-testid="navigate-button"
          className={classes.itemSidebar}
          classes={{ selected: classes.itemSelected }}
        >
          <ListItemIcon className={classes.itemSidebarIcon}>
            {renderIcon({ icon, label, isActive })}
          </ListItemIcon>
          <ListItemText
            primary={label}
            className={classes.itemSidebarText}
            classes={{ primary: classes.label }}
          />
        </ListItem>
      );
    });
  }, [renderIcon, classes, routeLocation, onHandleNavigate]);

  const drawerClassName = useMemo(
    () =>
      clsx(classes.drawer, {
        [classes.drawerOpen]: openDrawer,
        [classes.drawerClose]: !openDrawer,
      }),
    [openDrawer, classes]
  );

  const drawerClasses = useMemo(
    () => ({
      paper: clsx(classes.drawerPaper, {
        [classes.drawerOpen]: openDrawer,
        [classes.drawerClose]: !openDrawer,
      }),
    }),
    [openDrawer, classes]
  );

  return (
    <Drawer
      data-testid="drawerMenu"
      data-open={openDrawer}
      variant="permanent"
      className={drawerClassName}
      classes={drawerClasses}
    >
      <div className={classes.toolbar} />
      {appRoutes}
      {openDrawer && (
        <div className={classes.footerSidebar}>
          <img
            src="https://twendeesoft.com/wp-content/uploads/2022/07/logo.svg"
            alt="logo"
          />
        </div>
      )}
    </Drawer>
  );
}
