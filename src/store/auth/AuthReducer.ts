import { createReducer, PayloadAction } from "@reduxjs/toolkit";
import { login, logout, refresh } from "./AuthActions";
import { initialState } from "./AuthState";
import { authInitialState } from "./interfaces/authInitialState";

export const authReducer: any = createReducer(initialState, (builder) => {
  builder
    .addCase(login, (state, action: PayloadAction<authInitialState>) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
    })
    .addCase(logout, (state, action) => {
      state.user = null;
      state.token = null;
    })
    .addCase(refresh, (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
    });
});
