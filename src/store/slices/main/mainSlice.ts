import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserInfoSlice {
  selectedLanguage: string;
  logoutModalIsOpen: boolean
}

const initialState: UserInfoSlice = {
  selectedLanguage: 'en',
  logoutModalIsOpen: false
};

export const mainSlice = createSlice({
  initialState,
  name: 'main',
  reducers: {
    setLanguage: (state, { payload }: PayloadAction<string>) => {
      state.selectedLanguage = payload;
    },
    openDialog: (state) => {
      state.logoutModalIsOpen = true;
    },
    closeDialog: (state) => {
      state.logoutModalIsOpen = false;
    }
  }
});

const { actions } = mainSlice;

export const { setLanguage, openDialog, closeDialog } = actions;
