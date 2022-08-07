import { fade, makeStyles } from '@material-ui/core/styles';
import { drawerWidth, headerHeight } from 'utils/defaultValues/ui';

export const styles = makeStyles((theme) => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerPaper: {
    border: 'none',
    backgroundColor: theme.colors.navyBlue,
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(9),
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    backgroundColor: theme.colors.navyBlue,
    minHeight: headerHeight,
  },
  appbarExitIcon: {
    cursor: 'pointer',
    color: theme.colors.pureWhite,
  },
  itemSelected: {
    backgroundColor: `${fade(
      theme.colors.brightBlue2 as string,
      0.05
    )} !important`,
    borderLeft: `4px solid ${theme.colors.pureWhite}`,
    padding: `${theme.spacing(2, 3, 2, 2.5)} !important`,
  },
  itemSidebar: {
    padding: theme.spacing(2, 3),
    '&:hover': {
      cursor: 'pointer',
      background: `${fade(
        theme.colors.brightBlue2 as string,
        0.05
      )} !important`,
    },
  },
  itemSidebarIcon: {
    minWidth: 0,
    marginRight: theme.spacing(3),
  },
  itemSidebarText: {
    margin: 0,
  },
  label: {
    color: theme.colors.pureWhite,
  },
  iconWrapper: {
    height: '24px',
  },
  versionWrapper: {
    lineHeight: '30px',
    marginLeft: '5px',
  },
  footerSidebar: {
    marginTop: 'auto',
    textAlign: 'center',
    marginBottom: theme.spacing(3),
  },
  versionLink: {
    textDecoration: 'underline',
    border: 'none',
    backgroundColor: 'inherit',
    cursor: 'pointer',
    marginLeft: 'auto',
    marginRight: 'auto',
    display: 'flex',
    '&:focus': {
      outline: 'none',
    },
    fontSize: '14px',
    lineHeight: '24px',
    color: theme.colors.pureWhite,
    '& p': {
      color: theme.colors.pureWhite,
    },
  },
}));
