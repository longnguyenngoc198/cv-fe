import React, { useState } from 'react';

import Container from '@material-ui/core/Container';
import ChangePasswordForm from 'components/ChangePasswordForm';
import { useStyles } from './styles';
import { Button } from '@material-ui/core';

interface State {
  password: string;
  showPassword: boolean;
}
export default function ChangePassword() {
  const classes = useStyles();

  const [currentPassword, setCurrentPassword] = useState<State>({
    password: '',
    showPassword: false,
  });
  const [newPassword, setNewPassword] = useState<State>({
    password: '',
    showPassword: false,
  });
  const [confirmPassword, setConfirmPassword] = useState<State>({
    password: '',
    showPassword: false,
  });

  const handleChangeCurrentPassword = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setCurrentPassword({ ...currentPassword, password: event.target.value });
  };
  const handleClickShowCurrentPassword = () => {
    setCurrentPassword({
      ...currentPassword,
      showPassword: !currentPassword.showPassword,
    });
  };

  const handleChangeNewPassword = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setNewPassword({ ...newPassword, password: event.target.value });
  };
  const handleClickShowNewPassword = () => {
    setNewPassword({
      ...newPassword,
      showPassword: !newPassword.showPassword,
    });
  };

  const handleChangeConfirmPassword = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setConfirmPassword({ ...confirmPassword, password: event.target.value });
  };
  const handleClickShowConfirmPassword = () => {
    setConfirmPassword({
      ...confirmPassword,
      showPassword: !confirmPassword.showPassword,
    });
  };

  return (
    <Container component="main" maxWidth="xs">
      <div className={classes.paper}>
        <form className={classes.form} noValidate>
          <ChangePasswordForm
            label="Mật khẩu hiện tại"
            password={currentPassword.password}
            showPassword={currentPassword.showPassword}
            onChange={handleChangeCurrentPassword}
            onClick={handleClickShowCurrentPassword}
          />

          <ChangePasswordForm
            label="Mật khẩu mới"
            password={newPassword.password}
            showPassword={newPassword.showPassword}
            onChange={handleChangeNewPassword}
            onClick={handleClickShowNewPassword}
          />

          <ChangePasswordForm
            label="Xác nhận mật khẩu mới"
            password={confirmPassword.password}
            showPassword={confirmPassword.showPassword}
            onChange={handleChangeConfirmPassword}
            onClick={handleClickShowConfirmPassword}
          />
          <Button
            type="button"
            variant="contained"
            color="secondary"
            className={classes.submit}
          >
            Đổi Mật Khẩu
          </Button>
        </form>
      </div>
    </Container>
  );
}
