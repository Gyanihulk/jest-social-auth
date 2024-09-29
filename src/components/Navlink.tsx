import React from "react";
import { Link, useLocation } from "react-router-dom";
import { NavLinkProps } from "../types/components";

const NavLink: React.FC<NavLinkProps> = ({ to, text }) => {
  const location = useLocation();

  if (location.pathname == to) {
    return;
  }
  return (
    <Link to={to}>
      <p className="text-base leading-6 font-medium hover:text-gray-600 transition-colors duration-200 py-2">
        {text}
      </p>
    </Link>
  );
};

export default NavLink;
