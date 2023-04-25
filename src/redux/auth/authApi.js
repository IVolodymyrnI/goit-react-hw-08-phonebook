import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://connections-api.herokuapp.com',
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;

      if (token) {
        headers.set('authorization', `Bearer ${token}`);
			}

      return headers;
    },
  }),
  tagTypes: ['Auth'],
  endpoints: build => ({
    getUserDetails: build.query({
      query: () => ({ url: '/users/current' }),
      providesTags: ['Auth'],
    }),
    loginUser: build.mutation({
      query: userData => ({
        url: '/users/login',
        method: 'POST',
        body: userData,
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      }),
      invalidatesTags: ['Auth'],
    }),
    logoutUser: build.mutation({
      query: () => ({
        url: '/users/logout',
        method: 'POST',
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      }),
      invalidatesTags: ['Auth'],
    }),
    register: build.mutation({
      query: userData => ({
        url: '/users/signup',
        method: 'POST',
        body: userData,
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      }),
      invalidatesTags: ['Auth'],
    }),
  }),
});

export const {
  useRegisterMutation,
  useLoginUserMutation,
  useGetUserDetailsQuery,
  useLogoutUserMutation,
} = authApi;
