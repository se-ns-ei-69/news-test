import { configureStore } from '@reduxjs/toolkit';
import { newsSlice } from './slices/news/newsSlice';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { userInfoSlice } from './slices/auth/authSlice';
import { mainSlice } from './slices/main/mainSlice';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  version: 1,
  storage
};

const mainPersistConfig = {
  key: 'main',
  storage,
  blacklist: ['logoutModalIsOpen']
};

const persistedMainReducer =
  persistReducer(mainPersistConfig, mainSlice.reducer);
const persistedUserReducer =
  persistReducer(persistConfig, userInfoSlice.reducer);

export const store = configureStore({
  reducer: {
    [newsSlice.name]: newsSlice.reducer,
    [userInfoSlice.name]: persistedUserReducer,
    [mainSlice.name]: persistedMainReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
      }
    })
});

export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export type RootState = ReturnType<typeof store.getState>

export const persistor = persistStore(store);
