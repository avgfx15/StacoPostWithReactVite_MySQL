// ~ Dependency
import { createAsyncThunk } from '@reduxjs/toolkit';

// ~ axios import
import axios from 'axios';

// + SignUp Action
export const signUpAction = createAsyncThunk(
  'signUp/signUpAction',
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        'http://localhost:3100/api/v1/auth/signup',
        data
      );

      if (!response.data.successStatus) {
        return rejectWithValue(response.data.message);
      }
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || 'Signup failed');
    }
  }
);

// + Sign In Action
export const signInAction = createAsyncThunk(
  'signIn/signInAction',
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        'http://localhost:3100/api/v1/auth/signin',
        data,
        {
          withCredentials: true,
        }
      );
      if (!response.data.successStatus) {
        return rejectWithValue(response.data.message);
      }
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || 'Signin failed');
    }
  }
);

// + Sign Out Action
export const signOutAction = createAsyncThunk(
  'signOut/signOutAction',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        'http://localhost:3100/api/v1/auth/signout'
      );
      if (!response.data.successStatus) {
        return rejectWithValue(response.data.message);
      }
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || 'Signout failed');
    }
  }
);
