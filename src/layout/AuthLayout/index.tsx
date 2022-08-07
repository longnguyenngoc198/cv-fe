import React, { ElementType, useMemo, Suspense } from 'react';
import { RouteProps, useNavigate } from 'react-router-dom';
import clsx from 'clsx';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import moment from 'moment';
import CircularLoader from 'components/common/CircularLoader';

import { styles } from './styles';
import { AuthRuotesEnum } from 'enums/routes';

interface AuthLayoutProps extends RouteProps {
  RenderComponent: ElementType;
}

/**
 * AuthLayout HOC
 * Wrap 'RenderComponent' props with style and theme for auth layout
 */

export default function AuthLayout({
  RenderComponent,
  ...rest
}: AuthLayoutProps) {
  const classes = styles();
  const navigation = useNavigate();

  const style = useMemo(() => {
    return {
      image: { backgroundImage: `url("/images/bgAuth.jpg")` },
    };
  }, []);

  const backToLink = React.useCallback(() => {
    navigation(AuthRuotesEnum.LOGIN);
  }, [navigation]);

  return (
    <Grid
      container
      component="main"
      className={clsx(classes.root, classes.image)}
      style={style.image}
    >
      <Grid
        item
        xs={12}
        sm={8}
        md={7}
        lg={6}
        data-testid="authLayout"
        data-path={rest.path}
        className={classes.authForm}
      >
        <div className={classes.paper}>
          <div className={classes.formContainer}>
            <img
              src={
                'https://twendeesoft.com/wp-content/uploads/2022/07/logo.svg'
              }
              alt="logo"
              className={classes.logo}
              onClick={backToLink}
              aria-hidden="true"
            />

            <Suspense fallback={<CircularLoader />}>
              <RenderComponent />
            </Suspense>
          </div>
          <Typography
            className={classes.copyright}
            variant="body1"
            align="center"
          >
            {`© ${moment().year()} `}
            <Link color="inherit" href={'https://twendeesoft.com/'}>
              Twendee Software. Inc.
            </Link>
          </Typography>
        </div>
      </Grid>
    </Grid>
  );
}
