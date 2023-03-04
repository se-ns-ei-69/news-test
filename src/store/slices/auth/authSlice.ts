import { createSlice } from '@reduxjs/toolkit';

interface AuthSlice {
  isAuth: boolean;
}

const initialState: AuthSlice = {
  isAuth: false
};

export const userInfoSlice = createSlice({
  initialState,
  name: 'user',
  reducers: {
    login: (state) => {
      state.isAuth = true;
    },
    logout: (state) => {
      state.isAuth = false;
    }
  }
});

const { actions } = userInfoSlice;

export const { login, logout } = actions;
