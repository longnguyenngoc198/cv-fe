import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

export const styles = (theme: Theme) =>
  createStyles({
    root: {
      verticalAlign: 'top',
      '&:hover': {
        backgroundColor: theme.colors.brightBlue2,
      },
    },
    noSelect: {
      cursor: 'default',
    },
    expandRow: {
      cursor: 'default',
      backgroundColor: theme.colors.gray4,
      '& > td': {
        padding: 0,
      },
      '&:last-child': {
        '& > td': {
          borderBottom: 'none',
        },
      },
    },
    hiddenIcon: {
      color: 'transparent',
      visibility: 'hidden',
    },
    isExpand: {},
    buttonExpand: {
      padding: 0,
    },
  });

export const useStyles = makeStyles(styles);
