import React from "react";
import publicRoutes from "./publicRoutes";
import authRoutes from "./authRoutes";
import protectedRoutes from "./protectedroutes";
import { RouteObject, useRoutes } from "react-router-dom";

export const AppRoutes = () => {
  const routes: RouteObject[] = [
    ...publicRoutes,
    ...authRoutes,
    ...protectedRoutes,
  ];
  return useRoutes(routes);
};
