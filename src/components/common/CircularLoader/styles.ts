import { makeStyles } from '@material-ui/core/styles';

export const styles = makeStyles((theme) => ({
  isLoading: {
    width: '100%',
    position: 'absolute',
    zIndex: theme.zIndex.tooltip + 1, // top zIndex
    top: 0,
    left: 0,
    right: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  isHidden: {
    display: 'none',
  },
  fullLayout: {
    height: `calc(100vh - ${theme.spacing(13)}px)`,
    '&::before': {
      display: 'block',
      content: '""',
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: theme.colors.halfTransparentWhite,
    },
  },
  fullContent: {
    height: '100%',
    backgroundColor: theme.colors.halfTransparentWhite,
  },
}));
