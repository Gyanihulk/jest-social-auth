import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface User{
  id:number,
  email:string,
  first_name:string,
  last_name:string,
  avatar:string
}
interface AuthState {
  isAuthenticated: boolean;
  user: User | null;
}

const initialState: AuthState = {
  isAuthenticated: false,
  user: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<User>) => {
      state.isAuthenticated = true;
      state.user = action.payload;
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
    },
    signup: (state, action: PayloadAction<User>) => {
      state.isAuthenticated = true;
      state.user = action.payload;
    },
  },
});

export const { login, logout ,signup} = authSlice.actions;

export default authSlice.reducer;
