import { createSlice } from '@reduxjs/toolkit';
import { authReducer } from './AuthReducer';
import { initialState } from './AuthState';

export const authSlice = createSlice({
  name: 'auth',
  initialState:initialState,
  reducers: authReducer,
})


export const { login, logout,refresh } = authSlice.actions
export default authSlice.reducer