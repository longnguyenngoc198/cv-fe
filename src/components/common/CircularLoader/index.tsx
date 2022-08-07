import React, { useMemo, useCallback } from 'react';
import clsx from 'clsx';
import { CircularProgress, CircularProgressProps } from '@material-ui/core';
import Fade from '@material-ui/core/Fade';

import { styles } from './styles';

/**
 * CircularLoader
 * Render circular loading spinner / loader
 */
export interface ComponentProps {
  className?: string;
  circularProgressProps?: CircularProgressProps;
  loading?: boolean;
  type?: 'fullLayout' | 'fullContent';
}

export default function CircularLoader({
  circularProgressProps = { size: 50 },
  className,
  loading = true,
  type = 'fullLayout',
}: ComponentProps) {
  const classes = styles();

  const rootClassname = useMemo(
    () =>
      clsx(
        className,
        loading ? classes.isLoading : classes.isHidden,
        type === 'fullLayout' ? classes.fullLayout : classes.fullContent
      ),
    [classes, className, loading, type]
  );

  const onClick = useCallback((event: React.MouseEvent) => {
    event.nativeEvent.stopImmediatePropagation();
  }, []);

  return (
    <div
      className={rootClassname}
      data-testid="circularLoader"
      onMouseDown={onClick}
      onClick={onClick}
    >
      <Fade in={loading}>
        <CircularProgress {...circularProgressProps} />
      </Fade>
    </div>
  );
}
