import { createReducer } from '@reduxjs/toolkit';
import { login, logout, refresh } from './AuthActions';
import { initialState } from './AuthState';

// export const authReducer:any = {
//     login:(action:any) => {
//         return {user:action.user , token:action.token}
//     },
//     logout:()=>{
//         return {user:null,token:null}
//     },
//     refresh:(state:authInitialState,action:any) => {
//         return {...state,token:action.token}
//     }
// }

export const authReducer:any = createReducer(initialState,(builder) => {
    builder.addCase(login,(state,action) => {
       return {  user:action.payload.user , token:action.payload.token}
    }).addCase(logout,(state,action)=> {
        return {...state ,user:null , token:null}
    }).addCase(refresh,(state,action) => {
       return {...state  , token:action.payload.token}
    })
})