import React from "react";
import { ButtonProps } from "../types/components";

const Button: React.FC<ButtonProps> = ({
  text,
  onClick,
  className = "",
  variant = "primary",
  size = "large",
}) => {
  // Define styles for each variant
  const getButtonStyles = () => {
    switch (variant) {
      case "primary":
        return "bg-blue-600 hover:bg-blue-700 text-white";
      case "secondary":
        return "bg-gray-600 hover:bg-gray-700 text-white";
      case "outline":
        return "border border-gray-600 text-gray-600 hover:bg-gray-600 hover:text-white";
      default:
        return "bg-blue-600 hover:bg-blue-700 text-white";
    }
  };

  // Define styles for each size
  const getSizeStyles = () => {
    switch (size) {
      case "small":
        return "text-sm p-0 m-0"; // No padding and margin for small size
      case "large":
        return "p-3"; // Default padding for large size
      case "medium":
        return "p-2"; // Default padding for large size
      default:
        return "p-3"; // Fallback to large size padding
    }
  };

  return (
    <button
      onClick={onClick}
      className={`rounded ${getButtonStyles()} ${getSizeStyles()} ${className}`}
    >
      {text}
    </button>
  );
};

export default Button;
