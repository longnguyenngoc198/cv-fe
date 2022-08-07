import { makeStyles } from '@material-ui/core/styles';
import { headerHeight } from 'utils/defaultValues/ui';

export const styles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    width: '100%',
    height: '100%',
    minHeight: '100vh',
  },
  content: {
    display: 'flex',
    width: '100%',
    position: 'relative',
    zIndex: 1,
    marginTop: headerHeight,
    padding: theme.spacing(4),
    backgroundColor: theme.colors.lightBlue,
    overflow: 'auto',
  },
  emptyContent: {
    margin: 'auto',
    textAlign: 'center',
    '& img': {
      width: 66,
    },
  },
}));
