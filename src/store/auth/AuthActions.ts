import { createAction } from "@reduxjs/toolkit";
import { authInitialState } from "../../interfaces/authInitialState";

export const login = createAction<authInitialState>('LOGIN')

export const logout = createAction('LOGOUT')

export const refresh = createAction<authInitialState>('REFRESH')