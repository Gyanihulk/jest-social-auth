import React from "react";
import { RouteObject } from "react-router-dom";
import DashboardPage from "../pages/DashboardPage";
import PrivateRoute from "../middlewares/PrivateRoute";

const protectedRoutes: RouteObject[] = [
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardPage />
      </PrivateRoute>
    ),
  },
  {
    path: "/profile",
    element: (
      <PrivateRoute>
        <DashboardPage />
      </PrivateRoute>
    ),
  },
];

export default protectedRoutes;
