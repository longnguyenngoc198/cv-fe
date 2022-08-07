import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

export const styles = (theme: Theme) =>
  createStyles({
    root: {
      position: 'relative',
    },
    noDataMessage: {
      textAlign: 'center',
      fontStyle: 'italic',
    },
    cursorDefault: {
      cursor: 'default',
    },
    pagination: {},
    insertedRow: {
      backgroundColor: '#f5f5f5',
      height: '32px',
    },
  });

export const useStyles = makeStyles(styles);
