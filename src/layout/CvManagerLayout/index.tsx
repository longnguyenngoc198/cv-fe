import React, { ElementType, useState, useCallback } from 'react';
import { RouteProps, useLocation, useNavigate } from 'react-router-dom';

import { appRoutesEnum } from 'enums/routes';
import AppBar from './AppBar';
import Drawer from './Drawer';
import Toolbar from './ToolBar';

import { styles } from './styles';

export interface CvManagerLayoutProps extends RouteProps {
  RenderComponent: ElementType;
}

interface LayoutProps {
  RenderComponent: ElementType;
  path?: any;
}
function Layout(props: LayoutProps) {
  const { RenderComponent } = props;
  const classes = styles();
  const navigation = useNavigate();
  const [open, setOpen] = useState(true);
  const routeLocation = useLocation();

  const toggleDrawer = useCallback(() => {
    setOpen((lastState) => !lastState);
  }, []);

  const handleNavigate = useCallback(
    (route: appRoutesEnum) => {
      navigation(route);
    },
    [navigation]
  );

  return (
    <div className={classes.root}>
      <AppBar>
        <Toolbar onToggleDrawer={toggleDrawer} onNavigate={handleNavigate} />
      </AppBar>
      <Drawer
        openDrawer={open}
        onNavigate={handleNavigate}
        path={routeLocation.pathname}
      />
      <div className={classes.content} data-testid="dashboardSwitch">
        <RenderComponent />
      </div>
    </div>
  );
}
/**
 * DashboardLayout HOC
 * Wrap 'RenderComponent' props with style and theme for dashboard layout
 */
export default function CvManagerLayout({
  RenderComponent,
  ...rest
}: CvManagerLayoutProps) {
  return <Layout RenderComponent={RenderComponent} path={rest.path} />;
}
