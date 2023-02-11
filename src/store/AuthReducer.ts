import { authInitialState } from '../interfaces/authInitialState';

export const authReducer:any = {
    login:(action:any) => {
        return {user:action.user , token:action.token}
    },
    logout:()=>{
        return {user:null,token:null}
    },
    refresh:(state:authInitialState,action:any) => {
        return {...state,token:action.token}
    }
}