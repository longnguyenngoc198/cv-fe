import {
  makeStyles,
  fade,
  Theme,
  createStyles,
} from '@material-ui/core/styles';

export const styles = (theme: Theme) =>
  createStyles({
    toolbar: {
      padding: theme.spacing(2),
      background: theme.colors.gray4,
      borderTopLeftRadius: theme.spacing(0.5),
      borderTopRightRadius: theme.spacing(0.5),
    },
    search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.black, 0.05),
      '&:hover': {
        backgroundColor: fade(theme.palette.common.black, 0.1),
      },
      marginLeft: 0,
      width: 196,
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    wrapButtonLoading: {
      position: 'relative',
    },
    loading: {
      position: 'absolute',
      width: `24px !important`,
      height: `24px !important`,
      right: 0,
    },
    buttonDownload: {
      padding: 0,
      marginLeft: theme.spacing(2),
    },
    grow: {
      flexGrow: 1,
    },
    title: {
      overflow: 'hidden',
      whiteSpace: 'nowrap',
      textOverflow: 'ellipsis',
    },
  });

export const useStyles = makeStyles(styles);
