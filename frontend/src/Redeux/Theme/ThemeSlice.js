import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  theme: localStorage.getItem('theme') || 'light',
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    themeChangeAction: (state) => {
      state.theme = state.theme === 'light' ? 'dark' : 'light';
      localStorage.setItem('theme', state.theme);
    },
  },
});

export const themeReducer = themeSlice.reducer;

export const { themeChangeAction } = themeSlice.actions;

export const themeChangeState = (state) => state.themeReducer.theme;
