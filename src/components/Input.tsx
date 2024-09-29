import React from 'react';
import { InputProps } from '../types/components';



const Input: React.FC<InputProps> = ({ label, name, className = '', ...props }) => {
  return (
    <div className="mb-4">
      {label && (
        <label htmlFor={name} className="text-sm block mb-1">
          {label}
        </label>
      )}
      <input
        id={name}
        name={name}
        {...props}
        className={`outline-none border-gray-300 border rounded p-2 w-full focus:shadow-inputfocus focus:border-white ${className}`}
      />
    </div>
  );
};

export default Input;
