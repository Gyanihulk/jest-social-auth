import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, RouteProps } from 'react-router-dom';
import { RootState } from '../stores/userStore';

const PrivateRoute = ({ children }: RouteProps) => {
  const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);

  return isAuthenticated ? children : <Navigate to="/signin" />;
};

export default PrivateRoute;
