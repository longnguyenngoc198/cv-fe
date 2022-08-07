import { makeStyles, createStyles } from '@material-ui/core/styles';
export const styles = () =>
  createStyles({
    root: {
      width: '100%',
      backgroundColor: '#f5f5f5',
      textAlign: 'center',
      position: 'relative',
    },
  });

export const useStyles = makeStyles(styles);
