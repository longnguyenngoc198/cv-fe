/* eslint-disable react/jsx-no-duplicate-props */
import React, { useMemo } from 'react';
import TextField, { TextFieldProps } from '@material-ui/core/TextField';
import clsx from 'clsx';
import IconButton from '@material-ui/core/IconButton';
import { InputAdornment } from '@material-ui/core';
import { useStyles } from './styles';

export type SMLTextFieldProps = TextFieldProps & {
  hideBorder?: boolean;
  endAdornmentIconButton?: string | JSX.Element;
  endAdornmentIcon?: string | JSX.Element;
  onEndAdornmentClick?: () => void;
};
export default function SMLTextField(props: SMLTextFieldProps) {
  const classes = useStyles(props);
  const {
    variant = 'outlined',
    endAdornmentIconButton,
    endAdornmentIcon,
    hideBorder,
    onEndAdornmentClick,
    InputProps,
    ...rest
  } = props;

  const endAdornment = useMemo(() => {
    if (endAdornmentIconButton)
      return (
        <InputAdornment position="end">
          <IconButton
            data-testid="endAdornment-button"
            size="small"
            onClick={onEndAdornmentClick}
          >
            {typeof endAdornmentIconButton === 'string' ? (
              <img src={endAdornmentIconButton} alt="endAdornment-button" />
            ) : (
              endAdornmentIconButton
            )}
          </IconButton>
        </InputAdornment>
      );
    if (endAdornmentIcon) {
      return (
        <InputAdornment position="end">
          {typeof endAdornmentIcon === 'string' ? (
            <img src={endAdornmentIcon} alt="endAdornment-button" />
          ) : (
            endAdornmentIcon
          )}
        </InputAdornment>
      );
    }
    return undefined;
  }, [onEndAdornmentClick, endAdornmentIconButton, endAdornmentIcon]);

  return (
    <TextField
      fullWidth
      variant={variant as any}
      className={clsx({ [classes.hideBoder]: hideBorder })}
      InputProps={{
        endAdornment,
        ...InputProps,
      }}
      {...rest}
    />
  );
}
