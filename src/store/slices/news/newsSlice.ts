import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getNewsService } from '../../../services/GetNews/getNews';
import { groupById } from '../../../utils/groupById';

export interface News {
  body: string,
  title: string,
  id: number,
  userId: number
}

interface NewsSlice {
  currentPage: number;
  isLoading: boolean,
  error: boolean,
  newsObj: {[key: string]: News}
}

const initialState: NewsSlice = {
  currentPage: 1,
  isLoading: false,
  error: false,
  newsObj: {} as any
};

// eslint-disable-next-line max-len
export const getNews = createAsyncThunk<Array<News>, number, { rejectValue: any }>(
  '[NEWS]: GET NEWS LIST',
  async function(page, thunkApi) {
    const response = await getNewsService(page);
    return response.ok ?
      await response.json() :
      thunkApi.rejectWithValue(response.status);
  }
);

export const newsSlice = createSlice({
  initialState,
  name: 'news',
  reducers: {
    removeNews: (state, { payload }: PayloadAction<number>) => {
      delete state.newsObj[payload];
    },
    setPage: (state, { payload }) => {
      state.currentPage = payload;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getNews.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getNews.fulfilled, (state, { payload }) => {
      const news = groupById(payload);
      state.newsObj = { ...state.newsObj, ...news };
      state.error = false;
      state.isLoading = false;
    });
    builder.addCase(getNews.rejected, (state, action) => {
      state.error = true;
      state.isLoading = false;
    });
  }
});

const { actions } = newsSlice;

export const { removeNews, setPage } = actions;
