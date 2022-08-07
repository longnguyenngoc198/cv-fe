import React from 'react';
import clsx from 'clsx';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

import { useStyles } from './styles';

interface Props {
  label: string;
  password: string;
  showPassword: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onClick: () => void;
}

export default function ChangePasswordForm({
  password,
  showPassword,
  onChange,
  onClick,
  label,
}: Props) {
  const classes = useStyles();

  return (
    <FormControl className={clsx(classes.margin, classes.textField)}>
      <InputLabel htmlFor="standard-adornment-password">{label}</InputLabel>
      <Input
        className={classes.input}
        id="standard-adornment-password"
        type={showPassword ? 'text' : 'password'}
        value={password}
        onChange={onChange}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={onClick}
            >
              {showPassword ? <Visibility /> : <VisibilityOff />}
            </IconButton>
          </InputAdornment>
        }
      />
    </FormControl>
  );
}
