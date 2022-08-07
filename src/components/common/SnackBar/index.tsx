import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';

import { resetSnackBarAction } from 'store/snackBar/action';
import { styles } from './styles';
import { getSnackBar } from 'store/selector';

/**
 * SnackBar component
 * Render notification messages
 */
export default function SnackBar() {
  const classes = styles();
  const dispatch = useDispatch();
  const { show, message, messageType, anchorOrigin } = useSelector(getSnackBar);

  const handleClose = () => {
    dispatch(resetSnackBarAction());
  };

  if (show) {
    const keyOfMessage = new Date().getTime();
    return (
      <div className={classes.root}>
        <Snackbar
          key={keyOfMessage}
          anchorOrigin={
            anchorOrigin ?? { vertical: 'top', horizontal: 'center' }
          }
          open={show}
          autoHideDuration={6000}
          onClose={handleClose}
        >
          <Alert
            data-testid="alertSnackbar"
            elevation={6}
            variant="filled"
            onClose={handleClose}
            severity={messageType}
            iconMapping={{ warning: <></> }}
          >
            {message}
          </Alert>
        </Snackbar>
      </div>
    );
  }
  return null;
}
