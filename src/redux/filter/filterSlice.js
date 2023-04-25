import { createSlice } from '@reduxjs/toolkit';

export const filterSLice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    setFilter: (_, { payload }) => payload,
  },
});

export const { setFilter } = filterSLice.actions;
export const filterReducer = filterSLice.reducer;
