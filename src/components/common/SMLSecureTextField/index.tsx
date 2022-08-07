import React from 'react';
import HiddenPasswordIcon from 'assets/icon/hidden-password';
import ShowPasswordIcon from 'assets/icon/show-password';
import SMLTextField, {
  SMLTextFieldProps,
} from 'components/common/SMLTextField';

export default function SMLSecureTextField(props: SMLTextFieldProps) {
  const [showPassword, setShowPassword] = React.useState(false);

  const toggleShowPassword = React.useCallback(() => {
    setShowPassword((prevState) => !prevState);
  }, []);

  return (
    <SMLTextField
      type={showPassword ? 'text' : 'password'}
      endAdornmentIconButton={
        showPassword ? <HiddenPasswordIcon /> : <ShowPasswordIcon />
      }
      onEndAdornmentClick={toggleShowPassword}
      {...props}
    />
  );
}
