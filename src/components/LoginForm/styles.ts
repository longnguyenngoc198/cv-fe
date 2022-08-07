import { makeStyles } from '@material-ui/core/styles';

export const styles = makeStyles((theme) => ({
  form: {
    width: '100%',
  },
  textField: {
    height: 64,
    '&>div': {
      backgroundColor: '#FFFFFF',
      height: 40,
      '&>input': {
        boxSizing: 'border-box',
      },
    },
  },
  policyText: {
    color: theme.colors.pureWhite,
    '& > a': {
      textDecoration: 'underline',
      color: 'white',
    },
  },
  policyCheckbox: {
    padding: 0,
    color: theme.colors.pureWhite,
    marginRight: theme.spacing(1.5),
  },
  policyLabel: {
    marginLeft: 0,
  },
  policyHasError: {
    color: theme.colors.fieryRed,
  },
  submitButton: {
    backgroundColor: theme.colors.brightBlue,
    color: theme.colors.pureWhite,
    '&:hover': {
      backgroundColor: theme.colors.brightBlue,
    },
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
  },
  submitButtonDisable: {
    backgroundColor: `${theme.colors.gray3} !important`,
  },
  loading: {
    top: 0,
    bottom: 0,
    right: 10,
    margin: 'auto',
    position: 'absolute',
  },
  forgotPasswordLink: {
    textDecoration: 'underline',
    border: 'none',
    backgroundColor: 'inherit',
    cursor: 'pointer',
    marginLeft: 'auto',
    marginRight: 'auto',
    display: 'block',
    '&:focus': {
      outline: 'none',
    },
    fontSize: '14px',
    lineHeight: '24px',
    color: theme.colors.pureWhite,
    '& p': {
      color: theme.colors.pureWhite,
    },
  },
  contactUs: {
    color: theme.colors.pureWhite,
    '& p': {
      color: theme.colors.pureWhite,
    },
    textAlign: 'center',
  },
  contactUsLink: {
    textDecoration: 'underline',
    border: 'none',
    backgroundColor: 'inherit',
    cursor: 'pointer',
    marginLeft: 'auto',
    marginRight: 'auto',
    '&:focus': {
      outline: 'none',
    },
    fontSize: '14px',
    lineHeight: '24px',
    color: theme.colors.pureWhite,
    '& p': {
      color: theme.colors.pureWhite,
    },
    padding: 0,
  },
}));
