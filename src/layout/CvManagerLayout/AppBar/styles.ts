import { makeStyles } from '@material-ui/core/styles';
import { drawerWidth } from 'utils/defaultValues/ui';

export const styles = makeStyles((theme) => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    marginLeft: drawerWidth,
    minHeight: '64px',
    boxShadow: 'none',
    backgroundColor: theme.colors.navyBlue,
  },
}));
