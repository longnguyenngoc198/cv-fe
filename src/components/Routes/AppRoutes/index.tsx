import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import CvManagerLayout from '../../../layout/CvManagerLayout';
import { appRoutesEnum, AuthRuotesEnum } from '../../../enums/routes';

import CvManager from 'containers/Cv-Manager';
import Profile from 'containers/Profile';
import PageNotFound from 'containers/PageNotFound';

export default function AppRoutes() {
  return (
    <Routes>
      <Route
        path={appRoutesEnum.CV_MANAGER}
        element={
          <CvManagerLayout
            RenderComponent={CvManager}
            path={appRoutesEnum.CV_MANAGER}
          />
        }
      />
      <Route
        path={appRoutesEnum.PROFILE}
        element={
          <CvManagerLayout
            RenderComponent={Profile}
            path={appRoutesEnum.PROFILE}
          />
        }
      />
      <Route
        path={AuthRuotesEnum.LOGIN}
        element={<Navigate to={appRoutesEnum.CV_MANAGER} replace />}
      />
      <Route
        path="*"
        element={<CvManagerLayout RenderComponent={PageNotFound} />}
      />
    </Routes>
  );
}
