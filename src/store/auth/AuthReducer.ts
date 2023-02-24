import { createReducer, PayloadAction } from "@reduxjs/toolkit";
import { login, logout, refresh } from "./AuthActions";
import { initialState } from "./AuthState";
import { authInitialState } from "./interfaces/authInitialState";

export const authReducer: any = {
  login(state: authInitialState, action: PayloadAction<authInitialState>) {
    state.user = action.payload.user;
    state.token = action.payload.token;
  },
  logout(state: authInitialState) {
    state.user = null;
    state.token = null;
  },
  refresh(state: authInitialState, action: PayloadAction<authInitialState>) {
    state.user = action.payload.user;
    state.token = action.payload.token;
  },
};

// export const authReducer: any = createReducer(initialState, (builder) => {
//   builder
//     .addCase(login, (state, action) => {
//       return { user: action.payload.user, token: action.payload.token };
//     })
//     .addCase(logout, (state, action) => {
//       return { ...state, user: null, token: null };
//     })
//     .addCase(refresh, (state, action) => {
//       return { ...state, token: action.payload.token };
//     });
// });
