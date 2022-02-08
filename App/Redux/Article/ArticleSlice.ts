/* eslint-disable @typescript-eslint/no-unused-vars */

import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';

import Article from '../../Models/Article';

import SearchServices from '../../Services/searchServices';

interface ArticleState {
  loading: boolean;
  keyword: string | null;
  items: {
    articles: Article[];
    meta: {
      hits: number;
      offset: number;
      time: number;
    };
  };
}
const initialState = {
  items: {
    articles: [],
    meta: {
      hits: 0,
      offset: 0,
      time: 0,
    },
  },
  loading: true,
  keyword: null,
} as ArticleState;

export const getArticles = createAsyncThunk(
  'article/getArticles',
  async (data: {search: string; pageIndex: number}) => {
    const {pageIndex, search} = data;
    const response = await SearchServices.getSearchedNews(search, pageIndex);
    return response.data;
  },
);

interface SearchPayload {
  response: {
    docs: Article[];
    meta: {
      hits: number;
      offset: number;
      time: number;
    };
  };
}

const articleSlice = createSlice({
  name: 'article',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(getArticles.pending, (state, action) => {
        const {search} = action.meta.arg;
        if (state.keyword !== search) {
          state.loading = true;
          state.keyword = search;
          state.items = {
            articles: [],
            meta: {
              hits: 0,
              offset: 0,
              time: 0,
            },
          };
        }
      })
      .addCase(
        getArticles.fulfilled,
        (state, action: PayloadAction<SearchPayload>) => {
          const {response} = action.payload;
          state.loading = false;
          state.items = {
            articles: [...state.items.articles, ...response.docs],
            meta: response.meta,
          };
        },
      )
      .addCase(getArticles.rejected, state => {
        state.loading = false;
      });
  },
  reducers: {},
});

export const {} = articleSlice.actions;

export default articleSlice.reducer;
