import React, { PropsWithChildren } from 'react';
import AppBar from '@material-ui/core/AppBar';

import { styles } from './styles';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface Props {}

export default function CvManagerAppBar(props: PropsWithChildren<Props>) {
  const classes = styles();
  const { children } = props;

  return (
    <AppBar position="fixed" color="primary" className={classes.appBar}>
      {children}
    </AppBar>
  );
}
