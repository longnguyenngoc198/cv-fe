import React, { PropsWithChildren } from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import { Toolbar, IconButton, Typography, Button } from '@material-ui/core';

import LogoutIcon from 'assets/icon/log-out.svg';
import { appRoutesEnum } from 'enums/routes';

import { styles } from './styles';

export interface Props {
  onToggleDrawer: () => void;
  onNavigate: (route: appRoutesEnum, openLink?: boolean) => void;
}

export default function CvManagerToolbar(props: PropsWithChildren<Props>) {
  const classes = styles();
  const { onToggleDrawer } = props;

  return (
    <Toolbar className={classes.root} disableGutters>
      <div className={classes.header}>
        <div className={classes.appbarStart}>
          <IconButton
            data-testid="toolbarMenuButton"
            color="inherit"
            onClick={onToggleDrawer}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <img
            src="https://twendeesoft.com/wp-content/uploads/2022/07/logo.svg"
            alt="logo"
            aria-hidden="true"
            className={classes.logo}
          />
        </div>

        <div className={classes.appbarEnd}>
          <div>
            <Button
              data-testid="switch-vessel-button"
              className={classes.switchVessel}
              variant="contained"
              color="primary"
            >
              <Typography variant="subtitle2" className={classes.vesselName}>
                <span>Admin</span>
              </Typography>
            </Button>
          </div>

          <div className={classes.appcuesWrapper}>
            <div id="appcues-launchpad" />
          </div>

          <Typography variant="h6" noWrap>
            <IconButton
              data-testid="logoutButton"
              className={classes.logOutButton}
            >
              <img src={LogoutIcon} alt="logout" />
            </IconButton>
          </Typography>
        </div>
      </div>
    </Toolbar>
  );
}
