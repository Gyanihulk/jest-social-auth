import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { login as apiLogin } from "../services/http";
import Input from "../components/Input";
import { login } from "../stores/slices/authSlice";
import Button from "../components/Button";

const SignInPage: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async () => {
    try {
      const response = await apiLogin(email, password);
      dispatch(login(response.data));
      navigate("/dashboard");
    } catch (error) {
      console.error("Login failed", error);
    }
  };

  return (
    <div>
      <p className="text-3xl font-black">Sign In</p>
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
        text="Login"
        onClick={handleSubmit}
        className="text-white w-full mt-6 bg-pink-600 p-3 rounded"
      />
      <p className="mt-12 text-sm font-light">
        Don't have an account?
        <Link to="/signup">
          <span role="button" className="cursor-pointer text-pink-600">
            {" "}
            Sign Up.
          </span>
        </Link>
      </p>
    </div>
  );
};

export default SignInPage;
