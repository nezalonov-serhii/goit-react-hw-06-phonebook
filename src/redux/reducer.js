import { combineReducers } from '@reduxjs/toolkit';
import { contactReducer } from './contactsSlice/contactsSlice';
import { filterReducer } from './filterSlice/filterSlice';

export const reducer = combineReducers({
  contact: contactReducer,
  filter: filterReducer,
});
