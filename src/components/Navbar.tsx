import React from "react";
import NavLink from "./Navlink";
import { useSelector } from "react-redux";
import { RootState } from "../stores/userStore";
import { useLocation } from "react-router-dom";
import LogoutButton from "./LogoutButton";

const Navbar: React.FC = () => {
  const isAuhenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated
  );

  return (
    <nav className="py-4 px-12 flex border-b border-gray-300">
      <div className="m-1">
        <p className="text-2xl tracking-tight font-semibold px-4">
          Secure pages
        </p>
      </div>
      <div className="ml-auto flex space-x-10">
        {isAuhenticated ? (
          <>
            <NavLink to="/dashboard" text="Dashboard" />
            <NavLink to="/profile" text="My profile" />
            <LogoutButton/>
          </>
        ) : (
          <>
            {" "}
            <NavLink to="/signin" text="Sign In" />
            <NavLink to="/signup" text="Sign Up" />
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
