import React from "react";
import { useDispatch } from "react-redux";
import Button from "./Button"; // Import your Button component
import { logout } from "../stores/slices/authSlice";
import { useNavigate } from "react-router-dom";

const LogoutButton: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout()); // Dispatch logout action to reset authentication
    navigate("/signin"); // Navigate back to sign-in page after logout
  };

  return <Button text="Logout" onClick={handleLogout} className="bg-red-600" />;
};

export default LogoutButton;
