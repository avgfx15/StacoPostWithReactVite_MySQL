import { configureStore } from '@reduxjs/toolkit';
import { themeReducer } from './Redeux/Theme/ThemeSlice';
import { thunk } from 'redux-thunk';

export const store = configureStore({
  reducer: {
    themeReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});
