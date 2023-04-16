import { createSlice } from '@reduxjs/toolkit';

const contactInitialState = [];

const contactSlice = createSlice({
  name: 'contact',
  initialState: contactInitialState,
  reducers: {
    addContact(state, { payload }) {
      state.push(payload);
    },
    deleteContact(state, { payload }) {
      return state.filter(contact => contact.id !== payload);
    },
  },
});

export const { addContact, deleteContact } = contactSlice.actions;
export const contactReducer = contactSlice.reducer;
