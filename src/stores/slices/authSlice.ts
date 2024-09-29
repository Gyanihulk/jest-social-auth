import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AuthState, User } from "../../types/stores";
import { getCookie, removeCookie, setCookie } from "../../lib/cookieUtils";
import { verifyToken } from "../../services/http";
import { AppDispatch } from "../userStore";
import { clearLocalStorage, setLocalStorage } from "../../lib/localStorageUtils";

const initialState: AuthState = {
  isAuthenticated: false,
  user: null,
  token: getCookie("authToken") || null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<{ user: User; token: string }>) => {
      state.isAuthenticated = true;
      state.user = action.payload.user;
      state.token = action.payload.token;
      setCookie("authToken", action.payload.token);
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
      removeCookie("authToken");
      clearLocalStorage()
    },
    signup: (state, action: PayloadAction<{ user: User; token: string }>) => {
      state.isAuthenticated = true;
      state.user = action.payload.user;
      state.token = action.payload.token;
      setCookie("authToken", action.payload.token);
      setLocalStorage("User",action.payload.user)
    },
    verifyAuth: (state, action: PayloadAction<User>) => {
      state.isAuthenticated = true;
      state.user = action.payload
      setLocalStorage("User",action.payload)
    },
  },
});

export const verifyTokenThunk = () => async (dispatch: AppDispatch) => {
  try {
    const response = await verifyToken(); // Calls the API to verify token
    dispatch(authSlice.actions.verifyAuth(response.data.data)); // Dispatch user data on success
  } catch (error) {
    console.error("Token verification failed", error);
    dispatch(authSlice.actions.logout()); // Logout if token verification fails
  }
};

export const { login, logout, signup, verifyAuth } = authSlice.actions;

export default authSlice.reducer;
