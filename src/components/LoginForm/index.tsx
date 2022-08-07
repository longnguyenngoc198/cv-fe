import React from 'react';
import { useForm } from 'react-hook-form';
import { Button, Typography, Box, CircularProgress } from '@material-ui/core';

import SMLSecureTextField from 'components/common/SMLSecureTextField';
import SMLTextField from 'components/common/SMLTextField';

import { styles } from './styles';
import { UserCredentials } from 'types/user';

export type LoginFormProps = {
  handleForm: (credentials: UserCredentials) => Promise<boolean>;
  handleGoToForgotPassword: () => void;
  handleGoToContactUs: () => void;
  loading: boolean;
  pressSubmit: boolean;
};

export default function LoginForm({
  handleGoToForgotPassword,
  handleGoToContactUs,
  handleForm,
  loading,
  pressSubmit,
}: LoginFormProps) {
  const classes = styles();
  const { handleSubmit, register, watch } = useForm<UserCredentials>();

  return (
    <form onSubmit={handleSubmit(handleForm)} className={classes.form}>
      <SMLTextField
        className={classes.textField}
        hideBorder={false}
        placeholder="Email"
        defaultValue=""
        autoComplete="email"
        disabled={loading}
        id={'username'}
        error={pressSubmit && !watch('username')}
        helperText={
          pressSubmit && !watch('username') ? 'email is required' : ''
        }
        inputProps={{
          'data-testid': 'usernameInput',
          ...register('username'),
        }}
      />
      <SMLSecureTextField
        className={classes.textField}
        hideBorder={false}
        placeholder="Password"
        disabled={loading}
        defaultValue=""
        autoComplete="current-password"
        id={'password'}
        error={pressSubmit && !watch('password')}
        helperText={
          pressSubmit && !watch('password') ? 'password is required' : ''
        }
        inputProps={{
          'data-testid': 'passwordInput',
          ...register('password'),
        }}
      />
      <Box style={{ position: 'relative' }}>
        <Button
          data-testid="submitButton"
          type="submit"
          fullWidth
          disabled={pressSubmit && Object.values(watch()).some((ele) => !ele)}
          className={classes.submitButton}
          classes={{ disabled: classes.submitButtonDisable }}
        >
          Log in
        </Button>
        {loading && (
          <CircularProgress
            data-testid="loadingCircular"
            size={24}
            className={classes.loading}
          />
        )}
      </Box>
      <button
        type="button"
        className={classes.forgotPasswordLink}
        onClick={handleGoToForgotPassword}
      >
        <Typography variant="body1">Forgot password?</Typography>
      </button>
      <div className={classes.contactUs}>
        <Typography variant="body1">
          Having trouble logging in? Contact us{' '}
          <button
            type="button"
            className={classes.contactUsLink}
            onClick={handleGoToContactUs}
          >
            <Typography variant="body1">here</Typography>
          </button>
        </Typography>
      </div>
    </form>
  );
}
