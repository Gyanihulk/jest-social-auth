import React from "react";
import { RouteObject } from "react-router-dom";
import SignInPage from "../pages/SignInPage";
import SignUpPage from "../pages/SignUpPage";
import AuthRoute from "../middlewares/AuthRoute";

const authRoutes: RouteObject[] = [
  {
    path: "/signin",
    element: (
      <AuthRoute>
        <SignInPage />
      </AuthRoute>
    ),
  },
  {
    path: "/signup",
    element: (
      <AuthRoute>
        <SignUpPage />
      </AuthRoute>
    ),
  },
];

export default authRoutes;
