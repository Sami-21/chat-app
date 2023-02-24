import { createAction } from "@reduxjs/toolkit";
import { authInitialState } from "./interfaces/authInitialState";

export const login = createAction<authInitialState>("login");

export const logout = createAction("logout");

export const refresh = createAction<authInitialState>("refresh");
