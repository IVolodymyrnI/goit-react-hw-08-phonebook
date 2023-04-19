import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import { filterReducer } from './filterSlice';
import { apiSlice } from './operations';

export const store = configureStore({
  reducer: {
    filter: filterReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: [thunk, apiSlice.middleware],
});
