import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { login as apiLogin } from "../services/http";
import Input from "../components/Input";
import { login } from "../stores/slices/authSlice";
import Button from "../components/Button";
import AuthLayout from "./layout/AuthLayout";

const SignInPage: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async () => {
    try {
      const response = await apiLogin(email, password);
      // Split the email at the '@' symbol to get the local part before the domain
      const [localPart] = email.split("@");

      // Split the local part at the '.' symbol to separate first and last name
      const [firstName, lastName] = localPart.split(".");
      dispatch(
        login({
          user: {
            id: 1,
            email,
            first_name: firstName,
            last_name: lastName,
            avatar:
              "https://reqres.in/img/faces/2-image.jpg",
          },
          token: response.data.token,
        })
      );
      navigate("/dashboard");
    } catch (error) {
      console.error("Login failed", error);
    }
  };

  return (
    <AuthLayout>
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
          <span
            role="button"
            className="cursor-pointer text-pink-600"
          >
            {" "}
            Sign Up.
          </span>
        </Link>
      </p>
    </AuthLayout>
  );
};

export default SignInPage;
