import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initialState } from "./AuthState";
import { authInitialState } from "./interfaces/authInitialState";

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login(state, action: PayloadAction<authInitialState>) {
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    logout(state) {
      state.user = null;
      state.token = null;
    },
    refresh(state, action: PayloadAction<authInitialState>) {
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
  },
});

export const { login, logout, refresh } = authSlice.actions;
export default authSlice.reducer;
