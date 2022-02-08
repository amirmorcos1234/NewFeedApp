import {configureStore} from '@reduxjs/toolkit';

import articleReducer from '../Redux/Article/ArticleSlice';

import ReactotronConfig from '../../ReactotronConfig';

const store = configureStore({
  reducer: {
    article: articleReducer,
  },
  enhancers: [ReactotronConfig.createEnhancer!()],
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;
