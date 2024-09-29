import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { RootState } from "../stores/userStore";
import { RouteProps } from "../types/middleware";

const PrivateRoute = ({ children }: RouteProps) => {
  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated
  );

  return isAuthenticated ? (
    children
  ) : (
    <Navigate to="/signin" />
  );
};

export default PrivateRoute;
