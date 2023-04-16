import { createSlice } from '@reduxjs/toolkit';

const initialFilterState = '';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: initialFilterState,
  reducers: {
    getVisibleContact: (state, { payload }) => (state = payload),
  },
});

export const { getVisibleContact } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
