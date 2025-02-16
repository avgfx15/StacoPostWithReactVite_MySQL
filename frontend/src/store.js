import { configureStore } from '@reduxjs/toolkit';
import { thunk } from 'redux-thunk';

import { themeReducer } from './Redeux/Theme/ThemeSlice';
import { authReducer } from './Redeux/Auth/AuthSlice';

export const store = configureStore({
  reducer: {
    themeReducer,
    authReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});
