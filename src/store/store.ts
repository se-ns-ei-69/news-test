import { configureStore } from '@reduxjs/toolkit';
import { newsSlice } from './slices/news.slice';
import { useDispatch } from 'react-redux';

export const store = configureStore({
  reducer: newsSlice.reducer
});

export type AppDispatch = typeof store.dispatch

export const useAppDispatch = () => useDispatch<typeof store.dispatch>();
// export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
