import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface NewsSlice {
  news: Array<string>
}

const initialState: NewsSlice = {
  news: []
};

export const newsSlice = createSlice({
  initialState,
  name: 'news',
  reducers: {
    removeNews: (state, { payload }: PayloadAction<string>) => {
    },
    addNews: (state, { payload }: PayloadAction<Array<string>>) => {
    }
  }
})
;
