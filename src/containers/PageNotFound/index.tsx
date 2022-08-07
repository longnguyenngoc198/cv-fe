import React from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import { appRoutesEnum } from 'enums/routes';
import { useStyles } from './styles';

function PageNotFound() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography variant="h1" className={classes.statusCode}>
        404
      </Typography>
      <Typography variant="subtitle2">
        The page you&apos;re not looking for could not be found
      </Typography>
      <Button
        className={classes.btn}
        component={Link}
        to={appRoutesEnum.CV_MANAGER}
        variant="contained"
        color="secondary"
      >
        GO TO DASHBOARD
      </Button>
    </div>
  );
}

export default PageNotFound;
