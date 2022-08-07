import { makeStyles } from '@material-ui/core/styles';
import { drawerWidth, headerHeight } from '../../../utils/defaultValues/ui';

export const styles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(0, 3),
    minHeight: `${headerHeight}px !important`,
  },
  menuButton: {
    marginRight: theme.spacing(2),
    padding: theme.spacing(1),
    marginLeft: -theme.spacing(1),
  },
  appbarStart: {
    minWidth: drawerWidth,
    display: 'flex',
    alignItems: 'center',
  },
  hide: {
    display: 'none',
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
  },
  appbarEnd: {
    display: 'flex',
    alignItems: 'center',
    marginLeft: 'auto',
  },
  vesselName: {
    color: theme.colors.pureWhite,
    fontSize: 20,
    lineHeight: '32px',
    fontWeight: 500,
    textTransform: 'capitalize',
    whiteSpace: 'nowrap',
    padding: theme.spacing(0, 1),
    backgroundColor: theme.colors.navyBlue,
  },

  appbarExitIcon: {
    cursor: 'pointer',
    color: theme.colors.pureWhite,
  },
  logOutButton: {
    padding: 0,
  },
  switchVessel: {
    padding: 0,
    boxShadow: 'none',
    marginRight: theme.spacing(4),
    backgroundColor: theme.colors.navyBlue,
  },
  appbarVesselName: {
    display: 'flex',
    alignItems: 'center',
    fontWeight: 'bold',
  },
  vesselItem: {
    minWidth: '200px',
  },
  logo: {
    cursor: 'pointer',
  },
  boxVesselsDropdown: {},
  appcuesWrapper: {
    paddingRight: '34px',
    display: 'flex',
    alignItems: 'center',
    '& .appcues-widget-icon:after': {
      display: 'none !important',
    },
    '& .appcues': {
      width: '24px',
      height: '24px',
    },
    '& .appcues-widget-icon': {
      fontSize: '24px',
    },
  },
}));
