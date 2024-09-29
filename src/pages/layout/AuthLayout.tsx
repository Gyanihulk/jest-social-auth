import React from "react";
import { RouteProps } from "../../types/middleware";

const AuthLayout: React.FC<RouteProps> = ({ children }) => {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col items-center">
      <div className="max-w-full sm:w-540 mt-14">
        <div className="bg-white py-14 px-16 shadow-form rounded">
          {children}
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
