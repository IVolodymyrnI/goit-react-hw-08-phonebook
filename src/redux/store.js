import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import { contactsApi } from './contacts/contactsApi';
import { authApi } from './auth/authApi';
import persistStore from 'redux-persist/es/persistStore';
import { persistedAuthReducer } from './auth/authSlice';
import { filterReducer } from './filter/filterSlice';

export const store = configureStore({
  reducer: {
    filter: filterReducer,
    auth: persistedAuthReducer,
    [contactsApi.reducerPath]: contactsApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: [thunk, contactsApi.middleware, authApi.middleware],
});

export const persistor = persistStore(store);
