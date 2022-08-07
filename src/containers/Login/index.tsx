import React, { useState } from 'react';
import LoginForm from '../../components/LoginForm';
import { UserCredentials } from 'types/user';
import { useDispatch, useSelector } from 'react-redux';
import { loginAction } from 'store/login/action';
import { getIsLoadingLogin } from 'store/selector';

/**
 * Login container
 * Render login form
 * Redirect authenticated users
 */
export default function Login() {
  const [submit, setSubmit] = useState<boolean>(false);
  const dispatch = useDispatch();
  const loading = useSelector(getIsLoadingLogin);

  const handleForm = async (form: UserCredentials) => {
    try {
      setSubmit(true);
      if (!form.password || !form.username) return false;
      dispatch<any>(loginAction(form));
      return true;
    } catch (error) {
      return false;
    }
  };

  const handleGoToForgotPassword = React.useCallback(() => {
    // console.log('hande forgot password');
  }, []);

  const handleGoToContactUs = React.useCallback(() => {
    // console.log('handle contact');
  }, []);

  return (
    <LoginForm
      loading={loading}
      handleForm={handleForm}
      handleGoToForgotPassword={handleGoToForgotPassword}
      handleGoToContactUs={handleGoToContactUs}
      pressSubmit={submit}
    />
  );
}
