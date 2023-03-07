import { createSlice } from '@reduxjs/toolkit';

interface AuthSlice {
  isAuth: boolean;
}

const initialState: AuthSlice = {
  isAuth: false
};

export const authSlice = createSlice({
  initialState,
  name: 'auth',
  reducers: {
    login: (state) => {
      state.isAuth = true;
    },
    logout: (state) => {
      state.isAuth = false;
    }
  }
});

const { actions } = authSlice;

export const { login, logout } = actions;
