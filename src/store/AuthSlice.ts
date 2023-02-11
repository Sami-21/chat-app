import { createSlice } from '@reduxjs/toolkit';
import { authReducer } from './AuthReducer';
import { initialState } from './AuthState';

export const counterSlice = createSlice({
  name: 'auth',
  initialState:initialState,
  reducers: authReducer,
})