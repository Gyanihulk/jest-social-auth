import React from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <nav className="py-4 px-12 flex border-b border-gray-300">
      <div className="m-1">
        <p className="text-2xl tracking-tight font-semibold px-4">
          WebReinvent Assignment
        </p>
      </div>
      <div className="ml-auto flex space-x-10">
        <Link to="/signin">
          <p className="text-base leading-6 font-medium hover:text-gray-600 transition-colors duration-200 py-2">
            Login
          </p>
        </Link>
        <Link to="/dashboard">
          <p className="text-base leading-6 font-medium hover:text-gray-600 transition-colors duration-200 py-2">
            Dashboard
          </p>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
