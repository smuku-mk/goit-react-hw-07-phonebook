import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { contactsReducer, filterReducer } from './slices';

const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
