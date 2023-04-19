import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
  reducerPath: 'contactsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://643673948205915d34f3ce35.mockapi.io',
  }),
  tagTypes: ['Contact'],
  endpoints: builder => ({
    fetchContacts: builder.query({
      query: () => '/contacts',
      providesTags: ['Contact'],
    }),
    addContact: builder.mutation({
      query: payload => ({
        url: '/contacts',
        method: 'POST',
        body: payload,
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      }),
      invalidatesTags: ['Contact'],
    }),
    deleteContact: builder.mutation({
      query: id => ({
        url: `/contacts/${id}`,
        method: 'DELETE',
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      }),
      invalidatesTags: ['Contact'],
    }),
  }),
});

export const {
  useFetchContactsQuery,
  useAddContactMutation,
  useDeleteContactMutation,
} = apiSlice;
