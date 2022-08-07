import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  statusCode: {
    fontSize: 200,
    color: theme.colors.gray2,
    lineHeight: 'normal',
    marginBottom: theme.spacing(0),
  },
  btn: {
    marginTop: theme.spacing(2),
    height: 40,
  },
}));
