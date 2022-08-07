import React from 'react';
import { Typography } from '@material-ui/core';

import { useStyles } from './styles';
export default function CvManager() {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Typography variant="h2">Danh sach ung vien</Typography>
    </div>
  );
}
