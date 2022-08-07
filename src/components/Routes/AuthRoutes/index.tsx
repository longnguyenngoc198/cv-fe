import React from 'react';
import { Routes, Navigate, Route } from 'react-router-dom';
import AuthLayout from 'layout/AuthLayout';
import Login from 'containers/Login';
import { AuthRuotesEnum } from 'enums/routes';

export default function AuthRoutes() {
  return (
    <Routes>
      <Route
        path={AuthRuotesEnum.LOGIN}
        element={
          <AuthLayout RenderComponent={Login} path={AuthRuotesEnum.LOGIN} />
        }
      />
      <Route
        path="*"
        element={<Navigate to={AuthRuotesEnum.LOGIN} replace />}
      />
    </Routes>
  );
}
