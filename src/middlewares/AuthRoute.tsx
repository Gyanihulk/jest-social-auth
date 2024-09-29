import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { RootState } from "../stores/userStore";
import { RouteProps } from "../types/middleware";

const AuthRoute = ({ children }: RouteProps) => {
  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated
  );

  return isAuthenticated ? (
    <Navigate to="/dashboard" />
  ) : (
    <>{children}</>
  );
};

export default AuthRoute;
