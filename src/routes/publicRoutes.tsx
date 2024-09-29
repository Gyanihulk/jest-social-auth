import React from "react";
import { RouteObject } from "react-router-dom";

const publicRoutes: RouteObject[] = [
  {
    path: "/",
    element: <h1 className="text-center">Welcome Page</h1>,
  },
];

export default publicRoutes;
