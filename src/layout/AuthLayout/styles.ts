import { makeStyles } from '@material-ui/core/styles';
import { fade } from '@material-ui/core/styles/colorManipulator';

export const styles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
  },
  image: {
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  authForm: {
    backgroundColor: fade(theme.colors.navyBlue as string, 0.8),
  },
  paper: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    marginBottom: theme.spacing(10),
    cursor: 'pointer',
    marginTop: '20vh',
    objectFit: 'cover',
  },
  formContainer: {
    width: '65%',
    height: '90%',
    display: 'flex',
    flexDirection: 'column',
  },
  copyright: {
    marginTop: 'auto',
    marginBottom: theme.spacing(8),
    color: theme.colors.gray4,
  },
}));
