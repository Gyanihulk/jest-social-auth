import React from 'react';

interface ButtonProps {
  text: string;
  onClick: () => void;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ text, onClick, className = '' }) => {
  return (
    <button
      onClick={onClick}
      className={`text-white w-full mt-6 bg-pink-600 p-3 rounded ${className}`}
    >
      {text}
    </button>
  );
};

export default Button;
