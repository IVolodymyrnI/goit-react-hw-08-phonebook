import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

export const authSlice = createSlice({
  name: 'auth',
  initialState: { token: null, user: { email: null, name: null } },
  reducers: {
    setToken: (state, { payload }) => {
      state.token = payload;
    },
    setUser: (state, { payload }) => {
      state.user = payload;
    },
    clearData: (state, { payload }) => {
      state.user = { email: null, name: null };
      state.token = null;
    },
  },
});

const persistConfig = {
  key: 'auth',
  storage,
};

export const { setUser, setToken, clearData } = authSlice.actions;
export const persistedAuthReducer = persistReducer(
  persistConfig,
  authSlice.reducer
);
