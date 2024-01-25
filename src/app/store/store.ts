import { combineReducers, configureStore } from '@reduxjs/toolkit';

import pageReducer from '@/entities/page/api/pageSlice';
import { postsApi } from '@/entities/post/api';

const rootReducer = combineReducers({
  [postsApi.reducerPath]: postsApi.reducer,
  pageReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(postsApi.middleware),
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = typeof store;
export type AppDispatch = AppStore['dispatch'];
