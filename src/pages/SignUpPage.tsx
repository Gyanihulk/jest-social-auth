import React, { useState } from "react";
import { register } from "../services/http";
import Input from "../components/Input";
import { Link } from "react-router-dom";
import Button from "../components/Button";

const SignUpPage: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async () => {
    try {
      await register(email, password);
      // Redirect to login or dashboard after registration
    } catch (error) {
      console.error("Registration failed", error);
    }
  };

  return (
    <div>
      <p className="text-3xl font-black">Sign up for an account</p>
      <div className="mt-10">
        <Input
          label="Email"
          name="email"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          className="mt-2"
        />
      </div>
      <div className="mt-7">
        <Input
          label="Password"
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          name="password"
        />
      </div>
      <Button
        text="Register"
        onClick={handleSubmit}
        className="text-white w-full mt-6 bg-pink-600 p-3 rounded"
      />
      <p className="mt-12 text-sm font-light">
        Already have an account?
        <Link to="/signin">
          <span className="cursor-pointer text-pink-600"> Sign In.</span>
        </Link>
      </p>
    </div>
  );
};

export default SignUpPage;
