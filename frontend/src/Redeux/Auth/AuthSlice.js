import { createSlice } from '@reduxjs/toolkit';
import { signInAction, signOutAction, signUpAction } from './AuthAction';

const initialState = {
  loggedInUser: null,
  token: null,
  authLoading: false,
  authError: null,
  authSuccessStatus: null,
  authSuccessMessage: null,
  authErrorMessage: null,
};
const AuthSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (build) => {
    //# SignUp Action
    // % Pending
    build.addCase(signUpAction.pending, (state) => {
      state.authLoading = true;
      state.authError = null;
      state.authSuccessStatus = null;
    });
    // + Fulfilled
    build.addCase(signUpAction.fulfilled, (state, action) => {
      state.authLoading = false;
      state.authError = null;
      state.authErrorMessage = null;
      state.authSuccessStatus = action.payload.successStatus;
      if (!state.authSuccessStatus) {
        state.authErrorMessage = action.payload.message;
        state.authSuccessMessage = null;
      } else {
        state.authErrorMessage = null;
        state.authSuccessMessage = action.payload.message;
      }
    });
    // ! Rejected
    build.addCase(signUpAction.rejected, (state, action) => {
      state.authLoading = false;
      state.authError = action.payload.err;
      state.authSuccessStatus = action.payload.successStatus;
      state.authSuccessMessage = null;
      state.authErrorMessage = action.payload.message;
    });
    // # Sign In Action
    // % Pending
    build.addCase(signInAction.pending, (state) => {
      state.authLoading = true;
      state.authError = null;
      state.authSuccessStatus = null;
    });
    // + Fulfilled
    build.addCase(signInAction.fulfilled, (state, action) => {
      state.authLoading = false;
      state.authError = null;
      state.authErrorMessage = null;
      state.authSuccessStatus = action.payload.successStatus;
      state.loggedInUser = action.payload.user;
      state.token = action.payload.token;
    });
    // ! Rejected
    build.addCase(signInAction.rejected, (state, action) => {
      state.authLoading = false;
      state.authError = action.payload.err;
      state.authSuccessStatus = action.payload.successStatus;
      state.authSuccessMessage = null;
      state.authErrorMessage = action.payload.message;
    });
    // # SignOut Action
    // % Pending
    build.addCase(signOutAction.pending, (state) => {
      state.authLoading = true;
      state.authError = null;
      state.authSuccessStatus = null;
    });
    // + Fulfilled
    build.addCase(signOutAction.fulfilled, (state, action) => {
      state.authLoading = false;
      state.authError = null;
      state.authErrorMessage = null;
      state.authSuccessStatus = action.payload.successStatus;
      state.loggedInUser = null;
      state.token = null;
    });
    // ! Rejected
    build.addCase(signOutAction.rejected, (state, action) => {
      state.authLoading = false;
      state.authError = action.payload.err;
      state.authSuccessStatus = action.payload.successStatus;
      state.authSuccessMessage = null;
      state.authErrorMessage = action.payload.message;
    });
  },
});

export const authReducer = AuthSlice.reducer;

export const authLoadingState = (state) => state.authReducer.authLoading;

export const authErrorState = (state) => state.authReducer.authError;

export const authSuccessStatusState = (state) =>
  state.authReducer.authSuccessStatus;

export const authSuccessMessageState = (state) =>
  state.authReducer.authSuccessMessage;

export const authErrorMessageState = (state) =>
  state.authReducer.authErrorMessage;

export const loggedInUserState = (state) => state.authReducer.loggedInUser;

export const tokenState = (state) => state.authReducer.token;
