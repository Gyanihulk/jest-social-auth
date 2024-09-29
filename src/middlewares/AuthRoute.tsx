import React from "react";
import { useSelector } from "react-redux";
import { Navigate, RouteProps } from "react-router-dom";
import { RootState } from "../stores/userStore";

const AuthRoute = ({ children }: RouteProps) => {
  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated
  );

  return isAuthenticated ? <Navigate to="/dashboard" /> : <>{children}</>;
};

export default AuthRoute;
