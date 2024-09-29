import React from "react";
import { RouteObject } from "react-router-dom";
import SignInPage from "../pages/SignInPage";
import SignUpPage from "../pages/SignUpPage";

const authRoutes: RouteObject[] = [
  { path: "/signin", element: <SignInPage /> },
  { path: "/signup", element: <SignUpPage /> },
];

export default authRoutes;
