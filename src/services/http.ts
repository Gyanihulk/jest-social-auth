import axios from "axios";
import Cookies from "js-cookie";

const apiClient = axios.create({
  baseURL: "https://reqres.in/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export const login = (email: string, password: string) => {
  return apiClient.post("/login", { email, password });
};

export const register = (email: string, password: string) => {
  return apiClient.post("/register", { email, password });
};

export const getUsers = () => {
  return apiClient.get("/users");
};

export const getUserById = (id: number) => {
  return apiClient.get("/users/" + id);
};
export const verifyToken = () => {
  const token = Cookies.get("authToken");

  if (!token) {
    throw new Error("No token found");
  }
  // As not found any verification token api in req/res returning true is cookie is available
  return apiClient.get("/users/4");
};
